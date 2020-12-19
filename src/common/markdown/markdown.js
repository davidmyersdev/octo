import { parseCodeblocks } from '@/common/parsers'
import { extractImages, stripCodeblocks } from './utils'

class Markdown {
  constructor(text) {
    this.text = text || ''
  }

  codeblocks() {
    return parseCodeblocks(this.text)
  }

  images() {
    return extractImages(this.text)
  }

  stripCodeblocks() {
    return stripCodeblocks(this.text)
  }
}

export default Markdown
