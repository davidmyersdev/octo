import Mousetrap from 'mousetrap'

export const bind = ({ keybinding, callback }) => {
  Mousetrap.bind(keybinding, (e, _sequence) => {
    e.preventDefault()

    callback()
  })
}

export const bindGlobal = (keybinding, callback) => {
  prepareGlobal()

  Mousetrap.bindGlobal(keybinding, (e, _sequence) => {
    e.preventDefault()

    callback()
  })
}

export const prepareGlobal = () => {
  const c = {}
  const d = Mousetrap.prototype.stopCallback

  Mousetrap.prototype.stopCallback = function (e,b,a,f) {
    return this.paused ? !0 : c[a] || c[f] ? !1 : d.call(this,e,b,a)
  }

  Mousetrap.prototype.bindGlobal = function (a,b,d) {
    this.bind(a,b,d)

    if (a instanceof Array) {
      for (b=0; b<a.length; b++) {
        c[a[b]] = !0
      }
    } else {
      c[a] = !0
    }
  }

  Mousetrap.init()
}

export const unbind = ({ keybinding }) => {
  Mousetrap.unbind(keybinding)
}

export default {
  bind,
  bindGlobal,
  unbind,
}
