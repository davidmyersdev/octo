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
  "/precache-manifest.d3a3252eea1c9df5d4217a5c464e8831.js"
);

workbox.core.setCacheNameDetails({prefix: "@voraciousdev/octo"});

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
    "url": "https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;700&display=swap",
    "revision": "v1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdnjs.cloudflare.com\/.*/, workbox.strategies.staleWhileRevalidate({ "cacheName":"cloudflare-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts.gstatic.com\/s\/.*/, workbox.strategies.staleWhileRevalidate({ "cacheName":"font-cache", plugins: [] }), 'GET');
