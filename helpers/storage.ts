import localforage from 'localforage'
import { isClient } from '#helpers/environment'

export const storage = () => {
  return {
    instance: (options: object): typeof localforage => {
      if (isClient) {
        return localforage.createInstance(options)
      }

      return {
        keys: async () => [],
        getItem: async () => {},
        setItem: async () => {},
      } as unknown as typeof localforage
    },
  }
}
