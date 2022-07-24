import { tags } from './theme'
import { matchUrlAtStart } from './utils'
import type { InlineContext, MarkdownConfig } from '@lezer/markdown'
import type { Config } from '../index'

export const grammar = (_config: Config): MarkdownConfig => {
  return {
    defineNodes: [
      {
        name: 'ClickableUrl',
        style: tags.url,
      },
    ],
    parseInline: [
      {
        name: 'ClickableUrl',
        parse: (inline: InlineContext, _charCode: number, index: number) => {
          const match = matchUrlAtStart(
            inline.slice(
              index,
              inline.end
            )
          )

          if (match) {
            const start = Number(match.index)
            const end = Number(match.index) + match[0].length

            return inline.addElement(
              inline.elt(
                'ClickableUrl',
                index + start,
                index + end
              )
            )
          }

          return -1
        },
      },
    ],
  }
}
