import { hashtags } from './hashtags'
import { references } from './references'

export interface Config {
  docs: Doc[]
  tags: string[]
}

export interface Doc {
  id: string
  title: string
}

export const plugins = (config: Config) => {
  return [
    ...hashtags(config),
    ...references(config),
  ]
}
