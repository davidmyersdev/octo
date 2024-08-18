import { type Options, micromark } from 'micromark'
import { gfm, gfmHtml } from 'micromark-extension-gfm'

export type HtmlOptions = Options

export const toHtml = (markdown: string, options: Options = {}) => {
  return micromark(markdown, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()],
    ...options,
  })
}
