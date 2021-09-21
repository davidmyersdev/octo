import { syntaxTree } from '@codemirror/language'
import { RangeSet } from '@codemirror/rangeset'
import { StateField } from '@codemirror/state'
import { Decoration, EditorView, WidgetType } from '@codemirror/view'

class ImageWidget extends WidgetType {
  identifier

  constructor({ identifier }) {
    super()

    this.identifier = identifier
  }

  eq(imageWidget) {
    return imageWidget.identifier === this.identifier
  }

  toDOM() {
    const container = document.createElement('div')
    const backdrop = container.appendChild(document.createElement('div'))
    const embeddable = backdrop.appendChild(document.createElement('iframe'))

    container.setAttribute('aria-hidden', 'true')
    container.className = 'cm-image-container'
    backdrop.className = 'cm-image-backdrop'
    embeddable.className = 'cm-image-embeddable'

    container.style.paddingBottom = '0.5rem'
    container.style.paddingTop = '0.5rem'

    backdrop.classList.add('cm-image-backdrop')

    backdrop.style.borderRadius = 'var(--ink-image-border-radius, 0.25rem)'
    backdrop.style.display = 'flex'
    backdrop.style.alignItems = 'center'
    backdrop.style.justifyContent = 'center'
    backdrop.style.padding = '1rem'
    backdrop.style.maxWidth = '100%'

    embeddable.src = `https://codesandbox.io/embed/${this.identifier}`

    embeddable.setAttribute('allow', 'geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb')
    embeddable.setAttribute('loading', 'lazy')
    embeddable.setAttribute('sandbox', 'allow-modals allow-forms allow-popups allow-scripts allow-same-origin')

    return container
  }
}

export const sandbox = () => {
  const imageRegex = /\{\%\s+codesandbox\s+(?<identifier>.*)\s+\%\}/

  const imageDecoration = (imageWidgetParams) => Decoration.widget({
    widget: new ImageWidget(imageWidgetParams),
    side: -1,
    block: true,
  })

  const decorate = (state) => {
    const widgets = []

    syntaxTree(state).iterate({
      enter: (type, from, to) => {
        const result = imageRegex.exec(state.doc.sliceString(from, to))

        if (result && result.groups && result.groups.identifier) {
          widgets.push(imageDecoration({ identifier: result.groups.identifier }).range(state.doc.lineAt(from).from))
        }
      },
    })

    return widgets.length > 0 ? RangeSet.of(widgets) : Decoration.none
  }

  const imagesTheme = EditorView.baseTheme({
    '&dark .cm-image-backdrop': {
      backgroundColor: 'var(--ink-image-background-color, rgba(0, 0, 0, 0.2))',
    },
    '&light .cm-image-backdrop': {
      backgroundColor: 'var(--ink-image-background-color, rgba(0, 0, 0, 0.05))',
    },
  })

  const imagesField = StateField.define({
    create(state) {
      return decorate(state)
    },
    update(images, transaction) {
      if (transaction.docChanged) {
        return decorate(transaction.state)
      }

      return images.map(transaction.changes)
    },
    provide(field) {
      return EditorView.decorations.from(field)
    },
  })

  return [
    imagesTheme,
    imagesField,
  ]
}
