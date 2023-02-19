import { LanguageDescription } from '@codemirror/language'

export const language = () => {
  return LanguageDescription.of({
    name: 'mermaid',
    load: async () => {
      return (await import('codemirror-lang-mermaid')).mindmap()
    },
  })
}
