<p align="center">
  <a href="https://try.octo.app">
    <img height="100" src="resources/stacked.png">
  </a>
</p>

<p align="center">An offline-first, tag-based notes app built for developers.</p>

![screenshot](resources/screenshot.png)

## Install

As simple as it gets.

```shell
# install dependencies
npm install
```

## Local Dev

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

## Deploy

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

- [Buy Me a Coffee](https://www.buymeacoffee.com/voraciousdev)
- [Ko-Fi](https://ko-fi.com/voraciousdev)
