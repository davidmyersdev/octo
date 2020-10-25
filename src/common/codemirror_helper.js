import CodeMirror from 'codemirror';
import 'codemirror/mode/meta';

let modes = [];

const addModeScript = (mode, options) => {
  const script = document.createElement('script');

  // pull mode in via CDN
  script.src = getModeUrl(mode);

  if (options.onload) {
    script.onload = options.onload;
  }

  if (options.onerror) {
    script.onerror = options.onerror;
  }

  document.body.appendChild(script);
};

const getModeUrl = (mode) => {
  // hardcode for now
  return `https://cdnjs.cloudflare.com/ajax/libs/codemirror/${CodeMirror.version}/mode/${mode.mode}/${mode.mode}.min.js`;
};

const fuzzyFindMode = (fuzzy) => {
  const lowerFuzzy = fuzzy.toLowerCase();

  return CodeMirror.modeInfo.find((mode) => {
    // check to see if the mode matches
    if (mode.mode === lowerFuzzy) {
      return true;
    }

    // check to see if the extension matches
    if (mode.ext && mode.ext.includes(lowerFuzzy)) {
      return true;
    }

    return false;
  });
};

export const loadMode = (fuzzyMode, options) => {
  const mode = fuzzyFindMode(fuzzyMode);

  if (mode && mode.mode !== 'null' && !modes.some(m => m.mode === mode.mode)) {
    modes.push(mode);

    // ensure CodeMirror namespace exists in the browser
    window.CodeMirror = window.CodeMirror || CodeMirror;

    addModeScript(mode, options);
  }
};

export default {
  loadMode,
};
