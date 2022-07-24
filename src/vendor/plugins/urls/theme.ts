import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { Tag, tags as vendorTags } from '@lezer/highlight'
import type { Config } from '../index'

export const tags = {
  url: Tag.define(),
}

export const theme = (_config: Config) => {
  return syntaxHighlighting(
    HighlightStyle.define([
      {
        tag: tags.url,
        textDecoration: 'underline',
        // Todo: The cursor should only show as a pointer when the meta key is pressed.
        // '&:hover': { cursor: 'pointer' },
      },
      {
        tag: vendorTags.url,
        textDecoration: 'underline',
      },
    ])
  )
}
