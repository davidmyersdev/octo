import { EditorView } from '@codemirror/view'
import { matchUrls } from './utils'
import type { Config } from '../index'

const findUrl = (text: string, position: number) => {
  const matches = matchUrls(text)
  const found = matches.find((match) => {
    const start = Number(match.index)
    const end = Number(match.index) + match[0].length

    if (start < position && end > position) {
      return true
    }
  })

  if (found) {
    const [url] = found

    return url
  }
}

const clickHandler = EditorView.domEventHandlers({
  click: (event, view) => {
    if (event.metaKey) {
      const selection = view.state.selection
      const line = view.state.doc.lineAt(selection.main.from)
      const text = line.text
      const offset = selection.main.from - line.from
      const url = findUrl(text, offset)

      if (url) {
        if (process.browser) {
          window.open(url, '_blank')
        }
      }
    }
  },
})

export const clickable = (_config: Config) => {
  return clickHandler
}
