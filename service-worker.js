"use strict";var precacheConfig=[["/clickityclackity/index.html","92816130371fcfae508b0073fa784f61"],["/clickityclackity/static/js/main.85260fd3.js","9462b2aa7057aaebb5c88b47147e7b74"],["/clickityclackity/static/media/cardfront.b6fbe2a2.png","b6fbe2a24de5f6e71e28af5a9dbbcf7a"],["/clickityclackity/static/media/cat0.beb3c42e.gif","beb3c42eca96e8da430faf533701a48f"],["/clickityclackity/static/media/cat1.dfcbadbd.gif","dfcbadbd58c5b8ea7c338b3d3b5999fc"],["/clickityclackity/static/media/cat3.e9e36155.gif","e9e36155d41f7bd3f389b8d38c595b31"],["/clickityclackity/static/media/cat4.b3015b86.gif","b3015b86b472a87eadee2ac8651895ba"],["/clickityclackity/static/media/cat5.62800ced.gif","62800ceda1906031700682e2c32c23b6"],["/clickityclackity/static/media/cat6.04dd81c3.gif","04dd81c353b169d3363fbd172eea15fa"],["/clickityclackity/static/media/cat7.ca2e6695.gif","ca2e6695e56dbd16f0515c81df850eca"],["/clickityclackity/static/media/cat8.37b23af3.gif","37b23af3f12615b6549bebf65a8d5f38"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var n="/clickityclackity/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});