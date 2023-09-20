import { EditorView } from '@codemirror/view'
import { type Options } from 'ink-mde'

export const readonly = (isEnabled = true): Options.Plugin[] => {
  return [
    {
      type: 'default',
      value: isEnabled ? EditorView.editable.of(false) : [],
    },
  ]
}
