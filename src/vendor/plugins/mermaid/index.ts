import { widget } from './widget'
import type { Config } from '../index'

export const mermaid = (config: Config) => {
  return [
    { type: 'default', value: widget(config) },
  ]
}
