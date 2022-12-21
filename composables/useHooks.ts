export const useHooks = (context = window) => {
  const emit = (name: string) => {
    context.postMessage(name)
  }

  const subscribe = (handler: (message: string) => void) => {
    const listener = (event: MessageEvent) => handler(event.data)
    const unsubscribe = () => context.removeEventListener('message', listener)

    context.addEventListener('message', listener)

    return unsubscribe
  }

  return {
    emit,
    subscribe,
  }
}
