import { type Options, micromark } from 'micromark'
import { gfm, gfmHtml } from 'micromark-extension-gfm'

export const useMarkdown = (options: Options = { extensions: [gfm()], htmlExtensions: [gfmHtml()] }) => {
  const toHtml = (markdown: string) => {
    return micromark(markdown, options)
  }

  return {
    toHtml,
  }
}
