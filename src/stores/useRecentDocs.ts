import { defineStore } from 'pinia'

export const useRecentDocs = defineStore('recentDocs', {
  state: () => ({
    ids: <string[]>[],
  }),
  actions: {
    add(addId: string) {
      if (!this.ids.includes(addId)) {
        this.ids.push(addId)
      }
    },
    remove(removeId: string) {
      this.ids = this.ids.filter(id => id !== removeId)
    },
  },
  caching: false,
})
