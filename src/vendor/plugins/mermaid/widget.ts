import { syntaxTree } from '@codemirror/language'
import { RangeSet, StateField } from '@codemirror/state'
import { Decoration, DecorationSet, EditorView } from '@codemirror/view'
import type { EditorState, Extension, Range } from '@codemirror/state'
import type { WidgetType } from '@codemirror/view'
import { useDebounceFn } from '@vueuse/core'
import { customAlphabet } from 'nanoid'
import type { Config } from '../index'
import { buildSvg, themeCss as themeCSS, themeVariables } from './theme'

interface PreviewWidget extends WidgetType {
  compare: (widget: PreviewWidget) => boolean
  text: string
}

const alpha = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
const state = { isMermaidLoaded: false }

const updateChart = async (element: Element, text: string) => {
  try {
    const { default: mermaid } = await import('mermaid')

    mermaid.renderAsync(alpha(), text, (svgCode, bindFunctions) => {
      const svg = buildSvg(svgCode)

      svg.setAttribute('height', '100%')
      svg.setAttribute('width', '100%')

      element.replaceChildren(svg)

      if (bindFunctions) {
        bindFunctions(svg)
      }
    })
  } catch(error) {
    console.log('[mermaid]', error)
  }
}

const preview = (text: string, debouncers: Record<string, (element: Element, text: string) => void>): PreviewWidget => {

  return {
    compare: (other: PreviewWidget) => {
      return other.text === text
    },
    destroy: (dom) => {
      const { id } = dom

      delete debouncers[id]
    },
    eq: (other: PreviewWidget) => {
      return other.text === text
    },
    estimatedHeight: -1,
    ignoreEvent: () => true,
    text: text,
    toDOM: () => {
      const container = document.createElement('div')
      const content = document.createElement('div')
      const id = alpha()

      debouncers[id] = useDebounceFn(updateChart, 200, { maxWait: 500 })

      container.id = id
      container.className = 'ink-mde-widget'
      container.style.paddingBottom = '0.5rem'
      container.style.paddingTop = '0.5rem'
      container.setAttribute('aria-hidden', 'true')
      content.style.backgroundColor = '#121212'
      content.style.borderRadius = '0.25rem'
      content.style.minHeight = '0'
      content.style.width = '100%'
      // content.id = targetId
      content.className = 'ink-mde-mermaid-content'

      container.appendChild(content)

      updateChart(content, text)

      return container
    },
    updateDOM: (dom) => {
      const { id } = dom
      const content = dom.querySelector('.ink-mde-mermaid-content')!

      if (content) {
        const debounceUpdateChart = debouncers[id]

        debounceUpdateChart(content, text)

        return true
      }

      return false
    },
  }
}

export const widget = async (_config: Config): Promise<Extension> => {
  const debouncers = {}

  if (!state.isMermaidLoaded) {
    try {
      const { default: mermaid } = await import('mermaid')

      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeCSS,
        themeVariables,
      })

      const { default: mindmap } = await import('@mermaid-js/mermaid-mindmap')

      await mermaid.registerExternalDiagrams([mindmap], { lazyLoad: true })

      // This will prevent mermaid from being loaded multiple times in a single session.
      state.isMermaidLoaded = true
    } catch (error) {
      console.log('[mermaid]', error)

      return []
    }
  }

  const previewDecoration = (text: string) => Decoration.widget({
    block: true,
    side: -1,
    widget: preview(text, debouncers),
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
