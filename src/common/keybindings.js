import Mousetrap from 'mousetrap'

export const bind = ({ keybinding, callback }) => {
  if (process.browser) {
    Mousetrap.bind(keybinding, (e, _sequence) => {
      e.preventDefault()

      callback()
    })
  }
}

export const bindGlobal = async (keybinding, callback) => {
  if (process.browser) {
    // import global bind plugin
    await import('mousetrap/plugins/global-bind/mousetrap-global-bind.min.js')

    Mousetrap.bindGlobal(keybinding, (e, _sequence) => {
      e.preventDefault()

      callback()
    })
  }
}

export const unbind = ({ keybinding }) => {
  if (process.browser) {
    Mousetrap.unbind(keybinding)
  }
}

export default {
  bind,
  bindGlobal,
  unbind,
}
