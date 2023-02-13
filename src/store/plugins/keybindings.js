import { LOAD_KEYBINDINGS } from '#root/src/store/modules/keybindings'
import { SETTINGS_LOADED } from '#root/src/store/modules/settings'

export default (store) => {
  store.subscribe(({ type, _payload }, state) => {
    switch (type) {
      case SETTINGS_LOADED:
        store.dispatch(LOAD_KEYBINDINGS)

        break
      default:
        break
    }
  })
}
