import { language } from './language'
import { theme } from './theme'
import { widget } from './widget'

export const mermaid = async () => {
  return [
    { type: 'default', value: theme() },
    { type: 'default', value: await widget() },
    { type: 'language', value: language() },
  ]
}
