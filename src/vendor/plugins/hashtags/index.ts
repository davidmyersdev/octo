// https://discuss.codemirror.net/t/adding-support-for-the-additional-inline-syntax-to-markdown/3099
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { Tag } from '@lezer/highlight'
import { hashSigns, hashtagBoundaryChars, matchHashtag } from '/lib/hashtags/parser'
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
        // If not the first char, verify a valid "boundary" char is present before this one.
        // Verify the current start char is a hash sign.
        // Match the hashtag.
        const relativeIndex = context.index - context.inline.offset

        if (relativeIndex > 0) {
          const previousChar = context.inline.slice(context.index - 1, context.index)

          if (!hashtagBoundaryChars.test(previousChar)) { return -1 }
        }

        const currentChar = context.inline.slice(context.index, context.index + 1)

        if (!hashSigns.test(currentChar)) { return -1 }

        const match = matchHashtag(
          context.inline.slice(
            context.index,
            context.inline.end
          )
        )

        if (match) {
          const offset = match.length

          return context.inline.addElement(
            context.inline.elt(
              'Hashtag',
              context.index,
              context.index + offset
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
