/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/precache-manifest.31c64b9e797fb3bdce520ae8f15711fb.js"
);

workbox.core.setCacheNameDetails({prefix: "octo"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js"
  },
  {
    "url": "https://code.cdn.mozilla.net/fonts/fira.css",
    "revision": "v1"
  },
  {
    "url": "https://code.cdn.mozilla.net/fonts/ttf/FiraMono-Bold.ttf",
    "revision": "v1"
  },
  {
    "url": "https://code.cdn.mozilla.net/fonts/ttf/FiraMono-Regular.ttf",
    "revision": "v1"
  },
  {
    "url": "https://code.cdn.mozilla.net/fonts/ttf/FiraSans-Regular.ttf",
    "revision": "v1"
  },
  {
    "url": "https://code.cdn.mozilla.net/fonts/ttf/FiraSans-Medium.ttf",
    "revision": "v1"
  },
  {
    "url": "https://code.cdn.mozilla.net/fonts/woff/FiraMono-Bold.woff",
    "revision": "v1"
  },
  {
    "url": "https://code.cdn.mozilla.net/fonts/woff/FiraMono-Regular.woff",
    "revision": "v1"
  },
  {
    "url": "https://code.cdn.mozilla.net/fonts/woff/FiraSans-Regular.woff",
    "revision": "v1"
  },
  {
    "url": "https://code.cdn.mozilla.net/fonts/woff/FiraSans-Medium.woff",
    "revision": "v1"
  },
  {
    "url": "https://fonts.googleapis.com/css?family=Lato:400,700,400italic&display=swap",
    "revision": "v1"
  },
  {
    "url": "https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/darkly/bootstrap.min.css"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdnjs.cloudflare.com\/.*/, workbox.strategies.staleWhileRevalidate({ "cacheName":"cloudflare-cache", plugins: [] }), 'GET');
