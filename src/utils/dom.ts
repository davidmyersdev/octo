export const toEl = <T extends ChildNode>(html: string): T => {
  const template = document.createElement('template')

  template.insertAdjacentHTML('afterbegin', html)

  return template.firstChild as T
}
