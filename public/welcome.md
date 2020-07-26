#welcome

# Welcome

Welcome to Octo - a markdown based notes app with hashtag (aka tag) organization.

## Quickstart

Some tips to help us get started.

###### Outline

- Navigating this app
- Creating notes
- Adding tags
- Switching contexts
- Using quick filters

### Navigating this app

For the most part, navigation of this app will be the same on mobile and desktop. The primary difference is the lack of a sidebar on mobile.

###### Sidebar

The sidebar contains...

1. Tags: a list of all tags found across non-discarded documents.
2. Quick Filters: a list of common filters.

### Creating notes

We can create new notes using the actions menu in the top right of this app or by pressing `cmd+k n`.

### Adding tags

Notes are organized with hashtags. We can place them _pretty much_ anywhere in the note (excluding code blocks and URLs). If we want to escape a tag, we can just wrap it in an inline code block. E.g. `#hello` does not create a tag.

### Switching contexts

We can change our current context using the actions menu in the top right of this app or by pressing `cmd+k c`.

###### TLDR

We are constantly context-switching throughout our days. One goal of this app is to support that natural process.

A context in Octo is a filter against tags that is applied globally until the context is cleared or the app is reloaded (like a page refresh).

### Using quick filters

Quick filters are an alternative way to navigate our notes. Each of the quick filters has a specific purpose, and they are outlined below.

- actionable
- recent
- untagged
- discarded

###### actionable

All non-discarded notes that include _unchecked_ markdown checkboxes.

- [ ] this item is actionable
- [x] this item is not

###### recent

All non-discarded notes listed reverse chronologically by last updated timestamp.

###### untagged

All non-discarded notes that do not include at least one tag.

###### discarded

All notes that have been discarded.
