const codeRegex = /```([^\n\s]*)(?:\s([\w-]+\.[\w]+))?\n(.*?)```/gs
const imageTagRegex = /!\[(.*?)\]\((.+?)\)/g
const tagsRegex = /````.*?````|```.*?```|``.*?``|`.*?`|\w+:\/?\/?\S*|\(#[\w-]+\)|#([\w-]+)/gs
const headersRegex = /````.*?````|```.*?```|``.*?``|`.*?`|\w+:\/?\/?\S*|# ([^\n]+)/gs
const tasksRegex = /````.*?````|```.*?```|``.*?``|`.*?`|- \[ \] ([^\n]+)/gs

export const parse = (regex, text) => {
  let matches = []
  const results = []

  while (matches = regex.exec(text)) {
    results.push(matches)
  }

  return results
}

export const parseCodeblocks = (text) => {
  const matches = parse(codeRegex, text)
  const results = []

  matches.forEach((match) => {
    results.push({
      filename: match[2],
      language: match[1],
      code: match[3],
    })
  })

  return results
}

export const parseImages = (text) => {
  const matches = parse(imageTagRegex, text)
  const results = []

  matches.forEach((match) => {
    if (match[2]) {
      results.push({
        alt: match[1],
        url: match[2],
      })
    }
  })

  return results
}

export const parseTags = (text) => {
  const matches = parse(tagsRegex, text)
  const tags = new Set()

  matches.forEach((match) => {
    if (match[1]) {
      tags.add(match[1].toLowerCase())
    }
  })

  return Array.from(tags).sort()
}

export const parseHeaders = (text) => {
  const matches = parse(headersRegex, text)
  const headers = []

  matches.forEach((match) => {
    if (match[1]) {
      headers.push(match[1])
    }
  })

  return headers
}

export const parseTasks = (text) => {
  const matches = parse(tasksRegex, text)
  const results = []

  matches.forEach((match) => {
    if (match[1]) {
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
