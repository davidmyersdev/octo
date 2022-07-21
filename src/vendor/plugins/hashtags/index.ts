// https://discuss.codemirror.net/t/adding-support-for-the-additional-inline-syntax-to-markdown/3099
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { Tag } from '@lezer/highlight'
import { matchHashtags } from '/lib/hashtagged/parser'
import { completions } from './completions'
import type { InlineContext, MarkdownConfig } from '@lezer/markdown'
import type * as Ink from 'ink-mde'
import type { Config } from '../index'

interface ParserContext {
  charCode: number
  index: number
  inline: InlineContext
}

type Parser = (context: InlineContext, charCode: number, index: number) => number
type ParserCallback = (context: ParserContext) => number

const makeParser = (callback: ParserCallback): Parser => {
  return (inline: InlineContext, charCode: number, index: number) => {
    return callback({
      charCode,
      index,
      inline,
    })
  }
}

const tags = {
  hashtag: Tag.define(),
}

const Hashtag: MarkdownConfig = {
  defineNodes: [
    {
      name: 'Hashtag',
      style: tags.hashtag,
    },
  ],
  parseInline: [
    {
      name: 'Hashtag',
      parse: makeParser((context) => {
        const match = matchHashtags(
          context.inline.slice(
            context.index,
            context.inline.end
          )
        ).shift()

        if (match) {
          // This feels a little hacky, but since the parser scans incrementally char-by-char, we need to make sure we
          // aren't just matching a hashtag boundary as the start of the line (^) every time we see a hash sign.
          if (context.charCode === '#'.charCodeAt(0)) {
            const posBefore = Math.max(context.index - 1, context.inline.offset)

            if (posBefore < context.index) {
              const before = context.inline.slice(posBefore, posBefore + 1)

              if (!/\s/.test(before)) {
                return -1
              }
            }
          }

          const offset = match.length - match.boundary.length
          const offsetIndex = match.index + match.boundary.length

          return context.inline.addElement(
            context.inline.elt(
              'Hashtag',
              context.index + offsetIndex,
              context.index + offset + offsetIndex
            )
          )
        }

        return -1
      }),
      after: 'Emphasis',
    },
  ],
}

const theme = syntaxHighlighting(
  HighlightStyle.define([
    {
      tag: tags.hashtag,
      backgroundColor: 'var(--ink-internal-syntax-hashtag-background-color)',
      borderRadius: '0.25rem',
      color: 'var(--ink-internal-syntax-hashtag-color)',
      padding: '0.125rem 0.25rem',
    },
  ])
)

export const hashtags = (config: Config): Ink.Options.Plugin[] => {
  return [
    { type: 'completion', value: completions(config) },
    { type: 'default', value: theme },
    { type: 'grammar', value: Hashtag },
  ]
}
