export const isHtmlElement = (el: unknown): el is HTMLElement => {
  return !!el
    && typeof el === 'object'
    && 'nodeType' in el
    && el.nodeType === Node.ELEMENT_NODE
    && 'accessKey' in el
}

export const toEl = <T extends ChildNode>(html: string): T => {
  const template = document.createElement('template')

  template.insertAdjacentHTML('afterbegin', html)

  return template.firstChild as T
}
