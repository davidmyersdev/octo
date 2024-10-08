import { tryOnScopeDispose } from '@vueuse/core'
import { type Subscription } from 'rxjs'
import { liveQuery } from 'dexie'
import { type Ref, ref } from 'vue'
import { db } from '/src/db'
import { isClient } from '#helpers/environment'

export type QueryReturnType<T, I = undefined> = { result: Ref<T | I> }

export const useDatabase = () => {
  const observe = <T>(callback: () => T) => {
    return useObservable<T>(liveQuery<T>(callback) as any)
  }

  return {
    db,
    observe,
  }
}

export function useQuery<T>(callback: () => Promise<T>): QueryReturnType<T>
export function useQuery<T>(callback: () => Promise<T>, initialValue: T): QueryReturnType<T, T>
export function useQuery<T>(callback: () => Promise<T>, initialValue?: T) {
  const result = initialValue ? ref<T>(initialValue) : ref<T>()
  const subscription = ref<Subscription>()

  if (isClient) {
    watch(callback, () => {
      const observable = liveQuery<T>(callback)

      subscription.value?.unsubscribe()
      subscription.value = observable.subscribe({
        next: (value) => {
          result.value = value
        },
        error: (error) => {
          console.error(error)
        },
      }) as any
    }, { immediate: true })
  }

  tryOnScopeDispose(() => subscription.value?.unsubscribe())

  return {
    result,
  }
}
