import { deepmerge } from 'deepmerge-ts'
import localforage from 'localforage'
import { unwrap } from '/src/common/vue'

import type { PiniaPlugin } from 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    caching?: boolean | {
      actions?: boolean
      mutations?: boolean
      namespace?: string
      hydrate?: (cache: LocalForage) => void | Promise<void>
      persist?: (cache: LocalForage) => void | Promise<void>
    }
  }
}

export const caching: PiniaPlugin = async ({ options: { caching: options }, store }) => {
  if (!options) { return }
  if (options === true) { options = {} }

  const {
    actions = false,
    mutations = true,
    namespace = store.$id,
    hydrate = async (cache: LocalForage) => {
      const state = await cache.getItem<typeof store.$state>(namespace)

      if (state) {
        store.$state = deepmerge(store.$state, state)
      }
    },
    persist = async (cache: LocalForage) => {
      await cache.setItem(namespace, unwrap(store.$state))
    }
  } = options
  const cache = localforage.createInstance({ name: namespace })

  await hydrate(cache)

  if (mutations) {
    store.$subscribe((_mutation, _state) => {
      persist(cache)
    }, { detached: true })
  } else if (actions) {
    store.$onAction((_action) => {
      persist(cache)
    }, true)
  }
}
