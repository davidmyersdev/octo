import type { Root } from 'hast'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import rehypeParse from 'rehype-parse'
import rehypeTruncate from 'rehype-truncate'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'
import { getSettings, legacy } from '/src/databases/legacy'
import { main } from '/src/databases/main'
import { pack, unpack } from '/src/models/doc'

const toHtml = async (markdown: string) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .use(() => (tree: Root) => {
      visit(
        tree,
        'element',
        (node) => {
          if (node.tagName === 'img') {
            node.properties.loading = 'lazy'
          }
        },
      )
    })
    .process(markdown)

  return file.toString()
}

const toTruncated = async (html: string) => {
  const file = await unified()
    .use(rehypeParse)
    .use(rehypeTruncate, { maxChars: 1000 })
    .use(rehypeStringify)
    .process(html)

  return file.toString()
}

console.log('opening main database')

await main.open()

const docs = await legacy.docs.toArray()
console.log('got docs', docs.length)
console.log('getting settings')
const settings = await getSettings()
const { enabled, privateKey, publicKey } = settings?.crypto ?? {}

console.log('crypto', enabled, privateKey, publicKey)

console.log('looping docs')
for (const doc of docs) {
  console.log('unpacking doc', { ...doc })
  const unpacked = await unpack(doc, { privateKey })

  console.log('unpacked doc', { ...doc })

  unpacked.html = await toTruncated(await toHtml(unpacked.text))

  const packed = await pack(unpacked)

  console.log('packed doc', { ...packed })

  if (packed.html) {
    await main.docs.put(packed)
  }
}
