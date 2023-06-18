import { EditorView } from '@codemirror/view'

export const readonly = () => {
  return [
    { type: 'default' as const, value: EditorView.editable.of(false) },
  ]
}
