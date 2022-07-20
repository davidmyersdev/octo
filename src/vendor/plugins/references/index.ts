import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { Tag, tags as highlightTags } from '@lezer/highlight'
import { completions } from './completions'
import { replacements } from './replacements'
import type { MarkdownConfig } from '@lezer/markdown'

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

const getCode = (char: string) => {
  return char.charCodeAt(0)
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
        return next === getCode('[') && cx.char(pos + 1) === getCode('[')
          ? cx.addDelimiter(ReferenceStartDelimiter, pos, pos + 2, true, false)
          : -1
      },
      after: 'Emphasis',
    },
    {
      name: 'Reference',
      parse(cx, next, pos) {
        if (!(next === getCode(']') && cx.char(pos + 1) === getCode(']'))) { return -1 }

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
