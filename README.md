[![latest tag](https://img.shields.io/github/v/tag/voraciousdev/octo?color=blue&label=latest%20tag&sort=semver)](https://github.com/voraciousdev/octo/releases)
[![license](https://img.shields.io/github/license/voraciousdev/octo)](https://github.com/voraciousdev/octo/blob/master/LICENSE)
[![open issues](https://img.shields.io/github/issues-raw/voraciousdev/octo)](https://github.com/voraciousdev/octo/issues)
[![chat on discord](https://img.shields.io/badge/chat-on%20discord-7289da)](https://discord.gg/NWH9kFq5mb)
[![follow on twitter](https://img.shields.io/badge/follow-on%20twitter-1da1f2)](https://twitter.com/writewithocto)

<p align="center">
  <a href="https://octo.app">
    <img height="100" src="resources/stacked.png">
  </a>
</p>

<p align="center">A hackable, offline-first markdown editor for notes, code snippets, and writing that runs entirely in-browser.</p>

[![screenshot](resources/combined.png)](https://octo.app)

## Features

### Dark and Light Themes

Dark theme by default. Light theme if you want it. 😎

### Inline Markdown Rendering and Automatic Syntax Highlighting

All Markdown formatting is rendered in place. This eliminates the need for a preview pane while keeping your document in plain text. Feel free to copy and paste your Markdown into or out of this editor! Code blocks are automatically highlighted based on the tagged language.

### Client-Side Encryption

Uses a [hybrid cryptosystem](https://en.wikipedia.org/wiki/Hybrid_cryptosystem) approach to reap the benefits of both public-key and symmetric encryption.

### Keyboard Friendly and Searchable

Keyboard shortcuts are available for many actions. Search documents with plain text or regex.

### Context Switching

Focusing on `#work` or `#play`? Apply a global filter to only see the documents that are relevant in a given moment.

### Offline First and Mobile First (Responsive)

No account, server, or internet connectivity necessary (after first load). The entire app is cached in the browser using Service Workers. Documents are stored in IndexedDB. All features of the app are built for mobile and desktop. The design changes responsively based on available screen real estate.

### Modern Technologies

Built with Vue, Vuex, and VueRouter. Progressive Web Apps are accessible on all platforms and installable on many.

### Tag-based Organization and Networked Thought

Add as many hashtags to your documents as you like. Build a network of information and explore your knowledgebase just as you would explore your own memories.

![](resources/combined-graph.png)

## Demo

[Watch a quick intro on YouTube](https://youtu.be/Brtvzu-3qT8) (1m 39s)

To try out the sandboxed app (no accounts or syncing), check out [try.octo.app](https://try.octo.app).

## Install

As simple as it gets.

```shell
# install dependencies
npm install
```

## Local Development

We can run it in `development` mode.

```shell
# binds to localhost:8888
npm run serve_dev
```

We can also run it in `production` mode.

_Note: Offline functionality is only available in `production` mode due to [lack of support](https://github.com/vuejs/vue-cli/issues/2678) in the Vue PWA plugin._

```shell
# binds to localhost:8889
npm run serve_prod
```

## Compile to Static Assets

Create the production build.

```shell
# compiles at ./dist
npm run build_prod
```

The static assets will be available in the `dist` directory.

## Attributions

Logo by [Zagg Studios](https://zaggstudios.com/)

## Support

Your support is appreciated. ♥️

### Provide Feedback

Your feedback is immensely important for building octo into an app that we all love. Consider [opening an issue](https://github.com/voraciousdev/octo/issues) if you discover any bugs or just want to chat about ideas!

### Open a Pull Request

If you feel comfortable tackling [an existing issue](https://github.com/voraciousdev/octo/issues), please consider opening a Pull Request! I am happy to introduce you to the codebase and work with you to get it merged!

### Donate

Donations help support the development of octo (this open source project) and the hosting of [octo.app](https://octo.app).

Accounts on [octo.app](https://octo.app) include syncing and persistence through Firebase. Accounts are currently free, and your financial support directly impacts how long we can keep it that way.

- [Patreon](https://patreon.com/voraciousdev)
- [Ko-Fi](https://ko-fi.com/voraciousdev)
- [Buy Me a Coffee](https://www.buymeacoffee.com/voraciousdev)
