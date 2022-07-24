import { clickable } from './clickable'
import { grammar } from './grammar'
import { theme } from './theme'
import type { Config } from '../index'

export const urls = (config: Config) => {
  return [
    { type: 'default', value: clickable(config) },
    { type: 'default', value: theme(config) },
    { type: 'grammar', value: grammar(config) },
  ]
}
