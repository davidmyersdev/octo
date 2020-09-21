import Mousetrap from 'mousetrap';

// import global bind plugin
import 'mousetrap/plugins/global-bind/mousetrap-global-bind.min.js';

export const bind = ({ keybinding, callback }) => {
  Mousetrap.bind(keybinding, (e, _sequence) => {
    e.preventDefault();

    callback();
  });
};

export const bindGlobal = (keybinding, callback) => {
  Mousetrap.bindGlobal(keybinding, (e, _sequence) => {
    e.preventDefault();

    callback();
  });
};

export const unbind = ({ keybinding }) => {
  Mousetrap.unbind(keybinding);
};

export default {
  bind,
  bindGlobal,
  unbind,
};
