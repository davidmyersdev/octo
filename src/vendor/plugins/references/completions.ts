import type { CompletionContext, CompletionResult } from '@codemirror/autocomplete'
import type { Config } from './index'

export const completions = (config: Config) => {
  return (context: CompletionContext): CompletionResult | null => {
    const match = context.matchBefore(/\[\[(?:.(?!\[\[))*?/)

    if (!match) {
      return null
    }

    return {
      from: match.from + 2,
      options: config.docs.map((doc) => {
        return {
          apply: doc.id,
          label: doc.title || doc.id,
          type: 'text',
        }
      }),
    }
  }
}
