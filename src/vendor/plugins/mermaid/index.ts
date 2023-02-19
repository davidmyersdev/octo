import { language } from './language'
import { theme } from './theme'
import { widget } from './widget'
import type { Config } from '../index'

export const mermaid = async (config: Config) => {
  return [
    { type: 'default', value: theme() },
    { type: 'default', value: await widget(config) },
    { type: 'language', value: language() },
  ]
}
