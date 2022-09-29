import { tags } from './theme'
import { matchUrl, matchUrlPrefix } from './utils'
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
        parse: (inline: InlineContext, nextChar: number, index: number) => {
          // Attempts to parse URLs when the current position matches "://" and not ":///"
          if (nextChar !== 58 || inline.char(index + 1) !== 47 || inline.char(index + 2) !== 47 || inline.char(index + 3) === 47) return -1

          const text = inline.slice(
            inline.offset,
            index + 3, // '/'
          )
          const prefixMatch = matchUrlPrefix(text)

          if (prefixMatch) {
            const start = index - prefixMatch[1].length + 3

            const fullMatch = matchUrl(inline.slice(start, inline.end))

            if (fullMatch) {
              return inline.addElement(
                inline.elt(
                  'ClickableUrl',
                  start,
                  start + fullMatch[1].length,
                )
              )
            }
          }

          return -1
        },
      },
    ],
  }
}
