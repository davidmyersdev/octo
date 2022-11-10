import { syntaxTree } from '@codemirror/language'
import { RangeSet, StateField } from '@codemirror/state'
import { Decoration, DecorationSet, EditorView } from '@codemirror/view'
import type { EditorState, Extension, Range } from '@codemirror/state'
import type { WidgetType } from '@codemirror/view'
import mermaid from 'mermaid'
import { customAlphabet } from 'nanoid'
import type { Config } from '../index'
import { theme, themeStyles, updateSvg } from './theme'

interface PreviewWidget extends WidgetType {
  compare: (widget: PreviewWidget) => boolean
  text: string
}

const alpha = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')

const preview = (text: string): PreviewWidget => {
  return {
    compare: (other: PreviewWidget) => {
      return other.text === text
    },
    destroy: () => {},
    eq: (other: PreviewWidget) => {
      return other.text === text
    },
    estimatedHeight: -1,
    ignoreEvent: () => true,
    text: text,
    toDOM: () => {
      const container = document.createElement('div')
      const content = document.createElement('div')
      const targetId = alpha()

      container.style.paddingBottom = '0.5rem'
      container.style.paddingTop = '0.5rem'
      container.setAttribute('aria-hidden', 'true')
      content.id = targetId
      content.style.backgroundColor = '#121212'
      content.style.borderRadius = '0.25rem'

      container.appendChild(content)

      try {
        if (mermaid.parse(text)) {
          mermaid.render(targetId, text, (svg) => {
            content.replaceChildren(updateSvg(svg))
          })
        }
      } catch (error) {
        console.log('[mermaid]', error)
      }

      return container
    },
    updateDOM: () => false,
  }
}

export const widget = (_config: Config): Extension => {
  mermaid.initialize({ theme: 'base', themeCSS: themeStyles, themeVariables: theme })

  const previewDecoration = (text: string) => Decoration.widget({
    block: true,
    side: -1,
    widget: preview(text),
  })

  const decorate = (state: EditorState) => {
    const widgets: Range<Decoration>[] = []

    syntaxTree(state).iterate({
      enter: ({ type, from, to }) => {
        if (type.name === 'FencedCode') {
          // Do not run on empty references
          if (from + 2 === to - 2) { return }

          const block = state.sliceDoc(from, to)
          const isMermaid = /^`+mermaid(?:\s|$)/.test(block)

          if (isMermaid) {
            const position = state.doc.lineAt(from).from
            const lines = block.split('\n')

            lines.shift()
            lines.pop()

            const text = lines.join('\n')

            if (text) {
              widgets.push(previewDecoration(text).range(position))
            }
          }
        }
      },
    })

    return widgets.length > 0 ? RangeSet.of(widgets) : Decoration.none
  }

  const stateField = StateField.define<DecorationSet>({
    create(state) {
      return decorate(state)
    },
    update(references, transaction) {
      if (transaction.docChanged || transaction.reconfigured || transaction.effects.length > 0) {
        return decorate(transaction.state)
      }

      return references
    },
    provide(field) {
      return EditorView.decorations.from(field)
    },
  })

  return [
    stateField,
  ]
}
