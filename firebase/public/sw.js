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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "index.html",
    "revision": "17ed911c470905b9145f2bf29d7000e8"
  },
  {
    "url": "inline.318b50c57b4eba3d437b.bundle.js",
    "revision": "6eaa1608803b51f7d836604d9585670d"
  },
  {
    "url": "main.85119c8112fb0a233a71.bundle.js",
    "revision": "e759339872aec0d2f947d034cf392624"
  },
  {
    "url": "manifest.json",
    "revision": "818584bc0415a39c86f194f199d635d5"
  },
  {
    "url": "polyfills.b6b2cd0d4c472ac3ac12.bundle.js",
    "revision": "cd96a1aafb712c2efc2f2a16d4cb1e1f"
  },
  {
    "url": "styles.e8777b2b474dc5fcf347.bundle.css",
    "revision": "8f4fc1feefc1b9fdd937e8cf5c811cf7"
  },
  {
    "url": "workbox-config.js",
    "revision": "c768fc668c813c73dd4495306cf2d451"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
