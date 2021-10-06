export const readTime = (text: string, wordsPerMinute: number = 225): number => {
  return wordCount(text) / wordsPerMinute
}

export const wordCount = (text: string): number => {
  const scrubbed = text.replace(/[']/g, '').replace(/[^\w\d]+/g, ' ').trim()

  return scrubbed === '' ? 0 : scrubbed.split(/\s+/).length
}
