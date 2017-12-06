'use strict'
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function(e) {
      return e.map(function(e) {
        return e.url
      })
    })
    .then(function(e) {
      return new Set(e)
    })
}
var precacheConfig = [
    ['../index.html', 'cab2aa407a4e4df733953e4e8aad92f7'],
    ['./client.js', '302476b8b379a677f648aa1e48918ebd'],
    ['https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css', 'Bs8oRc3Ra7oBxMT2YdrF2YhKbhqLgfUv'],
    [
      'https://fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic',
      'hKHpp2uf28bmt6EP3AJRDVCWXQLynEHB'
    ],
    ['https://demo.productionready.io/main.css', '3b2JE8ccrqjczVJFqffcFRX79itHVZtN']
  ],
  cacheName = 'sw-precache-v3-sw-precache-webpack-plugin-' + (self.registration ? self.registration.scope : ''),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, t) {
    var n = new URL(e)
    return '/' === n.pathname.slice(-1) && (n.pathname += t), n.toString()
  },
  cleanResponse = function(e) {
    if (!e.redirected) return Promise.resolve(e)
    return ('body' in e ? Promise.resolve(e.body) : e.blob()).then(function(t) {
      return new Response(t, { headers: e.headers, status: e.status, statusText: e.statusText })
    })
  },
  createCacheKey = function(e, t, n, r) {
    var a = new URL(e)
    return (
      (r && a.pathname.match(r)) ||
        (a.search += (a.search ? '&' : '') + encodeURIComponent(t) + '=' + encodeURIComponent(n)),
      a.toString()
    )
  },
  isPathWhitelisted = function(e, t) {
    if (0 === e.length) return !0
    var n = new URL(t).pathname
    return e.some(function(e) {
      return n.match(e)
    })
  },
  stripIgnoredUrlParameters = function(e, t) {
    var n = new URL(e)
    return (
      (n.hash = ''),
      (n.search = n.search
        .slice(1)
        .split('&')
        .map(function(e) {
          return e.split('=')
        })
        .filter(function(e) {
          return t.every(function(t) {
            return !t.test(e[0])
          })
        })
        .map(function(e) {
          return e.join('=')
        })
        .join('&')),
      n.toString()
    )
  },
  hashParamName = '_sw-precache',
  urlsToCacheKeys = new Map(
    precacheConfig.map(function(e) {
      var t = e[0],
        n = e[1],
        r = new URL(t, self.location),
        a = createCacheKey(r, hashParamName, n, /\.\w{8}\./)
      return [r.toString(), a]
    })
  )
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(e) {
        return setOfCachedUrls(e).then(function(t) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function(n) {
              if (!t.has(n)) {
                var r = new Request(n)
                return fetch(r).then(function(t) {
                  if (!t.ok) throw new Error('Request for ' + n + ' returned a response with status ' + t.status)
                  return cleanResponse(t).then(function(t) {
                    return e.put(n, t)
                  })
                })
              }
            })
          )
        })
      })
      .then(function() {
        return self.skipWaiting()
      })
  )
}),
  self.addEventListener('activate', function(e) {
    var t = new Set(urlsToCacheKeys.values())
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function(e) {
          return e.keys().then(function(n) {
            return Promise.all(
              n.map(function(n) {
                if (!t.has(n.url)) return e.delete(n)
              })
            )
          })
        })
        .then(function() {
          return self.clients.claim()
        })
    )
  }),
  self.addEventListener('fetch', function(e) {
    if ('GET' === e.request.method) {
      var t,
        n = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching),
        r = 'index.html'
      ;(t = urlsToCacheKeys.has(n)) || ((n = addDirectoryIndex(n, r)), (t = urlsToCacheKeys.has(n)))
      var a = '/index.html'
      !t &&
        'navigate' === e.request.mode &&
        isPathWhitelisted(['^(?!\\/__).*'], e.request.url) &&
        ((n = new URL(a, self.location).toString()), (t = urlsToCacheKeys.has(n))),
        t &&
          e.respondWith(
            caches
              .open(cacheName)
              .then(function(e) {
                return e.match(urlsToCacheKeys.get(n)).then(function(e) {
                  if (e) return e
                  throw Error('The cached response that was expected is missing.')
                })
              })
              .catch(function(t) {
                return (
                  console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, t), fetch(e.request)
                )
              })
          )
    }
  })
