import { widget } from './widget'
import type { Config } from '../index'

export const mermaid = async (config: Config) => {
  return [
    { type: 'default', value: await widget(config) },
  ]
}
