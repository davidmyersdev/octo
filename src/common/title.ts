export const DEFAULT_TITLE = 'Build your second brain'

export const setTitle = (title: string) => {
  document.title = `${title ? title : DEFAULT_TITLE} | Octo`
}
