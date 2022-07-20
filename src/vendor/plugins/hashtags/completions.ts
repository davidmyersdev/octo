import { Config } from '../index'
import type { CompletionContext, CompletionResult } from '@codemirror/autocomplete'

export const completions = (config: Config) => {
  return (context: CompletionContext): CompletionResult | null => {
    const match = context.matchBefore(/\#.*?/)

    if (!match) { return null }

    return {
      from: match.from + 1,
      options: config.tags.map((tag) => {
        return {
          apply: tag,
          label: tag,
          type: 'text',
        }
      })
    }
  }
}
