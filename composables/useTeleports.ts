import { injectOrProvide } from './injectOrProvide'

const teleportsKey = Symbol('teleports') as InjectionKey<ReturnType<typeof buildTeleports>>

const buildTeleports = () => {
  const teleports = ref(new Map<string, HTMLElement | undefined>())

  return {
    teleports,
  }
}

export const useTeleports = () => injectOrProvide(teleportsKey, buildTeleports)
