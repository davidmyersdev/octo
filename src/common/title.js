export const DEFAULT_TITLE = "Build your knowledge base"

export const setTitle = (title) => {
  document.title = `${title ? title : DEFAULT_TITLE} | Octo`
}
