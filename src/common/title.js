export const DEFAULT_TITLE = "The App for Technical Writers"

export const setTitle = (title) => {
  document.title = `${title ? title : DEFAULT_TITLE} | Octo`
}

export const formatTitleTags = (tags) => {
  return tags.map(tag => `#${tag}`).join(", ")
}
