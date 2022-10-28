import { hashtagWithBoundary } from '/lib/hashtagged/parser'

// Todo: Determine if we need to support more than 5 backticks for code blocks.
const codeBlockIndicators = ['`````', '````', '```']
const codeInlineIndicators = ['``', '`']
const trashMultiline = new RegExp(codeBlockIndicators.map(ind => `${ind}.*?${ind}`).join('|'))
const trashInline = new RegExp(codeInlineIndicators.map(ind => `${ind}[^\n]*?${ind}`).join('|'))
const trashBin = new RegExp(`${trashMultiline.source}|${trashInline.source}`)

const imageTagRegex = /!\[(.*?)\]\((.+?)\)/g
const referencesRegex = new RegExp(`${trashBin.source}|\\[\\[(.*?)\\]\\]`, 'gsi')
const tagsRegex = new RegExp(`${trashBin.source}|(${hashtagWithBoundary.source})`, 'gsi')
// Todo: Replace more of these with composed regular expressions.
const codeRegex = /```([^\n\s]*)(?:\s([\w-]+\.[\w]+))?\n(.*?)```/gs
const headersRegex = /````.*?````|```.*?```|``.*?``|`.*?`|\w+:\/?\/?\S*|# ([^\n]+)/gs
const tasksRegex = /````.*?````|```.*?```|``.*?``|`.*?`|- \[ \] ([^\n]+)/gs

type CodeResult = { code: string, filename: string, language: string }
type ImageResult = { alt: string, url: string }
type MatchResult = RegExpMatchArray | null

export const parse = (regex: RegExp, text: string) => {
  let matches: MatchResult = null
  const results: MatchResult[] = []

  while (matches = regex.exec(text)) {
    results.push(matches)
  }

  return results
}

export const parseCodeblocks = (text: string) => {
  const matches = parse(codeRegex, text)
  const results: CodeResult[] = []

  matches.forEach((match) => {
    if (match) {
      results.push({
        filename: match[2],
        language: match[1],
        code: match[3],
      })
    }
  })

  return results
}

export const parseImages = (text: string) => {
  const matches = parse(imageTagRegex, text)
  const results: ImageResult[] = []

  matches.forEach((match) => {
    if (match && match[2]) {
      results.push({
        alt: match[1],
        url: match[2],
      })
    }
  })

  return results
}

export const parseReferences = (text: string) => {
  const matches = parse(referencesRegex, text)
  const references = new Set()

  matches.forEach((match) => {
    if (match && match[1]) {
      references.add(match[1])
    }
  })

  return Array.from(references).sort()
}

export const parseTags = (text: string) => {
  const matches = parse(tagsRegex, text)
  const tags = new Set()

  matches.forEach((match) => {
    if (match && match[1]) {
      tags.add(match[1].toLowerCase().trim().slice(1))
    }
  })

  return Array.from(tags).sort()
}

export const parseHeaders = (text: string) => {
  const matches = parse(headersRegex, text)
  const headers: string[] = []

  matches.forEach((match) => {
    if (match && match[1]) {
      headers.push(match[1])
    }
  })

  return headers
}

export const parseTasks = (text: string) => {
  const matches = parse(tasksRegex, text)
  const results: string[] = []

  matches.forEach((match) => {
    if (match && match[1]) {
      results.push(match[1])
    }
  })

  return results
}

export default {
  parse,
  parseCodeblocks,
  parseImages,
  parseTags,
}
