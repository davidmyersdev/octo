import marked from 'marked'
import hljs from './highlight.js'

marked.setOptions({
  highlight(code) {
    return hljs.highlightAuto(code).value
  },
})

const renderer = {
  link(href, _title, text) {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`
  },
}

marked.use({ renderer })

export default marked
