import { nanoid } from 'nanoid'

export type Toast = {
  id: string,
  message: string,
  ttl?: number,
}

export const toastsKey = Symbol('toasts') as InjectionKey<Ref<Toast[]>>

export const useToasts = () => {
  const toasts = injectOrProvide(toastsKey, () => ref<Toast[]>([]))

  const addToast = (message: string, ttl = 1500) => {
    const id = nanoid()

    toasts.value.push({
      id,
      message,
      ttl,
    })

    setTimeout(() => {
      hideToast(id)
    }, ttl)
  }

  const hideToast = (id: string) => {
    toasts.value.splice(toasts.value.findIndex(t => t.id === id), 1)
  }

  return {
    addToast,
    hideToast,
    toasts,
  }
}
