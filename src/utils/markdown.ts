// import type { Root } from 'hast'
// import rehypeSanitize from 'rehype-sanitize'
// import rehypeStringify from 'rehype-stringify'
// import remarkGfm from 'remark-gfm'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import { unified } from 'unified'
// import { visit } from 'unist-util-visit'

// // Todo: Make this async to (hopefully) help with performance.
// export const toHtml = async (markdown: string) => {
//   const file = await unified()
//     .use(remarkParse)
//     .use(remarkGfm)
//     .use(remarkRehype)
//     .use(rehypeSanitize)
//     .use(rehypeStringify)
//     .use(() => (tree: Root) => {
//       visit(
//         tree,
//         'element',
//         (node) => {
//           if (node.tagName === 'img') {
//             node.properties.loading = 'lazy'
//           }
//         },
//       )
//     })
//     .process(markdown)

//   return file.toString()
// }
