if(!self.define){let e,n={};const i=(i,c)=>(i=new URL(i+".js",c).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,o)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(n[f])return;let l={};const s=e=>i(e,f),r={module:{uri:f},exports:l,require:s};n[f]=Promise.all(c.map((e=>r[e]||s(e)))).then((e=>(o(...e),l)))}}define(["./workbox-ca2b596c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"front"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.f87e7c0d.css",revision:null},{url:"/css/vendor.4d29f1c1.css",revision:null},{url:"/favicon.ico",revision:"e746e061c1fa6f1eae9e23b150ae993d"},{url:"/fni.png",revision:"3ee25e278792f8bf62ed125073e6d7e9"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0383092b.woff2",revision:null},{url:"/fonts/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.f882956f.woff",revision:null},{url:"/fonts/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.6f420cf1.woff2",revision:null},{url:"/icons/apple-icon-120x120.png",revision:"53d3f4bae1e43ad1fe9085d2de34a2a7"},{url:"/icons/apple-icon-152x152.png",revision:"196582463645e9d2f77c82cbd4819ea5"},{url:"/icons/apple-icon-167x167.png",revision:"ee765f132eb7810ee83cbf807e20fced"},{url:"/icons/apple-icon-180x180.png",revision:"05c0448fbad09bda53d291132b1353ad"},{url:"/icons/apple-launch-1125x2436.png",revision:"fe7f9e6800e42376d31fc36e4068831f"},{url:"/icons/apple-launch-1170x2532.png",revision:"dd2e3e30bc39bcf8ebc308d8c86f57c1"},{url:"/icons/apple-launch-1242x2208.png",revision:"d91bdcefb087f950ef43f5c5f6341880"},{url:"/icons/apple-launch-1242x2688.png",revision:"24eaf1bd51d71fb42329db8db5f8ce76"},{url:"/icons/apple-launch-1284x2778.png",revision:"4b5911515d9be6252247493848389b73"},{url:"/icons/apple-launch-1536x2048.png",revision:"4dfb86a5c87c478458ba59b948d77476"},{url:"/icons/apple-launch-1620x2160.png",revision:"7c52ca8bf0a4e4097ecfc19a3d3237ea"},{url:"/icons/apple-launch-1668x2224.png",revision:"7841c1c7fc278ea7f3c87f3c183e11ce"},{url:"/icons/apple-launch-1668x2388.png",revision:"a9c1c3c564bcd78e794b7db24899dd75"},{url:"/icons/apple-launch-2048x2732.png",revision:"9de565a5048d841a0743739bc20118de"},{url:"/icons/apple-launch-750x1334.png",revision:"2d86eb0fc0b54d06b03744f0b336b98f"},{url:"/icons/apple-launch-828x1792.png",revision:"35b9ffe87928169b732bc733ce4eff59"},{url:"/icons/favicon-128x128.png",revision:"3d10d86d4f9d7f3bd3e2efc61e91e11f"},{url:"/icons/favicon-16x16.png",revision:"8d247de769cda637c1842f774798ce52"},{url:"/icons/favicon-32x32.png",revision:"a3c99ced23e6edba1d77b3a15e4d1d06"},{url:"/icons/favicon-96x96.png",revision:"26bac7ea015fce1c5a62dbee8ba44954"},{url:"/icons/icon-128x128.png",revision:"3d10d86d4f9d7f3bd3e2efc61e91e11f"},{url:"/icons/icon-192x192.png",revision:"8d3a701c27b355b85124f904df5f6682"},{url:"/icons/icon-256x256.png",revision:"f50ed58b00f213ab1a372fd3ce52fc19"},{url:"/icons/icon-384x384.png",revision:"0d7acb574ef94a9d1c39c9fe21cb0c8d"},{url:"/icons/icon-512x512.png",revision:"d60883df1a39202e96eefcd15c489855"},{url:"/icons/ms-icon-144x144.png",revision:"c4d3ca2450c0a1d8834da39399161cc8"},{url:"/icons/safari-pinned-tab.svg",revision:"2daf8937f0079fa914e621fc310e9c85"},{url:"/index.html",revision:"23b6270e3b06e67309c6fdb82660d0eb"},{url:"/js/862.54b8fb3f.js",revision:null},{url:"/js/app.048e443e.js",revision:null},{url:"/js/vendor.55529ee8.js",revision:null},{url:"/logo.png",revision:"3c4f5136731ef4ad932b62d890dda0ca"},{url:"/manifest.json",revision:"cd4d01912a5b637957167aa7a4cd85b0"},{url:"/uto.png",revision:"6c58960ef0831058e0cbd9c051a72a83"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
