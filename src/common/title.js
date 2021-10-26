export const DEFAULT_TITLE = "The App for Technical Writers"

export const setTitle = (title) => {
  document.title = `${title ? title : DEFAULT_TITLE} | Octo`
}
