import CodeMirror from 'codemirror';
import 'codemirror/mode/meta';

let modes = [];
let vimLoaded = false;

const addModeScript = (mode, options) => {
  const modeUrl = getModeUrl(mode);
  
  addScript(modeUrl, options);
};

const addScript = (url, { onload, onerror }) => {
  const script = document.createElement('script');

  script.src = url;

  if (onload) {
    script.onload = onload;
  }

  if (onerror) {
    script.onerror = onerror;
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

export const loadVim = (options) => {
  // ensure CodeMirror namespace exists in the browser
  window.CodeMirror = window.CodeMirror || CodeMirror;
  
  const vimUrl = `https://cdnjs.cloudflare.com/ajax/libs/codemirror/${CodeMirror.version}/keymap/vim.min.js`;
  const onload = () => {
    vimLoaded = true;

    if (options.onload) options.onload();
  };

  if (!vimLoaded) {
    addScript(vimUrl, {
      onload,
      onerror: options.onerror,
    });
  }
};

export default {
  loadMode,
  loadVim,
};
