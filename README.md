<p align="center">
  <a href="https://try.octo.app">
    <img height="100" src="public/img/icons/logo-512x512.png">
  </a>
</p>

<h1 align="center">octo</h1>

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
