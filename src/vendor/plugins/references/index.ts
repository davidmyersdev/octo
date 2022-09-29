import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { Tag, tags as highlightTags } from '@lezer/highlight'
import { completions } from './completions'
import { replacements } from './replacements'
import type { MarkdownConfig } from '@lezer/markdown'

const LEFT_BRACKET_CODE = 91
const RIGHT_BRACKET_CODE = 93

export interface Config {
  docs: Doc[]
}

export interface Doc {
  id: string
  title: string
}

const tags = {
  reference: Tag.define(),
  referenceMark: Tag.define(),
}

const ReferenceStartDelimiter = {}

const grammar: MarkdownConfig = {
  defineNodes: [
    {
      name: 'Reference',
      style: tags.reference,
    },
    {
      name: 'ReferenceMark',
      style: [tags.referenceMark, highlightTags.processingInstruction],
    },
  ],
  parseInline: [
    {
      name: 'ReferenceStart',
      parse(cx, next, pos) {
        return next === LEFT_BRACKET_CODE && cx.char(pos + 1) === LEFT_BRACKET_CODE
          ? cx.addDelimiter(ReferenceStartDelimiter, pos, pos + 2, true, false)
          : -1
      },
      after: 'Emphasis',
    },
    {
      name: 'Reference',
      parse(cx, next, pos) {
        if (!(next === RIGHT_BRACKET_CODE && cx.char(pos + 1) === RIGHT_BRACKET_CODE)) { return -1 }

        // @ts-ignore
        const parts = cx.parts
        const openIndex = cx.findOpeningDelimiter(ReferenceStartDelimiter)

        if (Number.isInteger(openIndex)) {
          const start = parts[openIndex].from
          const end = pos + 2
          const content = cx.takeContent(openIndex)

          content.unshift(cx.elt('ReferenceMark', start, start + 2))
          content.push(cx.elt('ReferenceMark', end - 2, end))

          let ref = parts[openIndex] = cx.elt('Reference', start, end, content)

          return ref.to
        }

        return -1
      },
      after: 'ReferenceStart',
    },
  ],
}

const theme = syntaxHighlighting(
  HighlightStyle.define([
    {
      tag: tags.reference,
    },
    {
      tag: tags.referenceMark,
    },
  ])
)

export const references = (config: Config) => {
  return [
    { type: 'completion', value: completions(config) },
    { type: 'default', value: theme },
    { type: 'default', value: replacements(config) },
    { type: 'grammar', value: grammar },
  ]
}
