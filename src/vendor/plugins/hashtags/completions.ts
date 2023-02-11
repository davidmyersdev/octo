import { matchStarts } from '#root/lib/hashtagged/parser'
import { Config } from '../index'
import type { CompletionContext, CompletionResult } from '@codemirror/autocomplete'

export const completions = (config: Config) => {
  return (context: CompletionContext): CompletionResult | null => {
    // matchBefore calls .search on the line text up to the current position
    // const match = context.matchBefore(hashtagWithBoundary)
    const line = context.state.doc.lineAt(context.pos)
    const text = line.text.slice(0, context.pos - line.from)
    const match = matchStarts(text).pop()

    if (!match) { return null }

    const offset = match.index + match.length

    return {
      from: line.from + offset,
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
