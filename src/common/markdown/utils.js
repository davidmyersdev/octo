import { parseImages } from '@/common/parsers'

const multilineTokens = ['````', '```']
const inlineTokens = ['``', '`']

export const extractImages = (text) => {
  let images = []

  stripCodeblocks(text).split('\n').forEach((line, index) => {
    const matches = parseImages(line)

    images.push(
      ...matches.map((match) => ({
        alt: match.alt || null,
        line: index,
        url: match.url,
      }))
    )
  })

  return images
}

export const stripCodeblocks = (text) => {
  return stripInlineCodeblocks(
    // multiline codeblocks need to be stripped first
    stripMultilineCodeblocks(text)
  )
}

export const stripInlineCodeblocks = (text) => {
  let final = text

  inlineTokens.forEach((token) => {
    const searchRegex = new RegExp(`${token}.*?${token}`, 'g')

    final = final.replace(searchRegex, '')
  })

  return final
}

export const stripMultilineCodeblocks = (text) => {
  let final = text

  multilineTokens.forEach((token) => {
    const searchRegex = new RegExp(`${token}.*?${token}`, 'gs')

    final = final.replace(searchRegex, (match) => match.replace(/[^\n]*/g, ''))
  })

  return final
}

export default {
  extractImages,
  stripCodeblocks,
  stripInlineCodeblocks,
  stripMultilineCodeblocks,
}
