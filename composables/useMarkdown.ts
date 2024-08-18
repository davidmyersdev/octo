import { type HtmlOptions, toHtml } from '#root/src/utils/markdown'

export const useMarkdown = (options: HtmlOptions = {}) => {
  return {
    toHtml: (markdown: string, overrides: HtmlOptions = {}) => {
      return toHtml(markdown, { ...options, ...overrides })
    },
  }
}
