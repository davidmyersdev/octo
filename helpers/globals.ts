import { isClient } from './environment'

export const navigator = isClient ? window.navigator : undefined
