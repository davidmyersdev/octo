import * as functions from 'firebase-functions'
/// @ts-ignore
import xp from '@writewithocto/xp'

export const publishArticle = functions.https.onCall((data, _context) => {
  const config = {
    dev: data.dev,
    hashnode: data.hashnode,
    medium: data.medium,
  }
  const article = {
    title: data.title,
    content: data.content,
  }

  return xp(config).create(article)
})
