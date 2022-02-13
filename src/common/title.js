export const DEFAULT_TITLE = "The Notes App for Knowledge Workers"

export const setTitle = (title) => {
  document.title = `${title ? title : DEFAULT_TITLE} | Octo`
}
