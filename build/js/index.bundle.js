!function(){var e={851:function(){document.querySelectorAll(".btn").forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".tariff__card").querySelector(".tariff__card-header-title");console.log(t.textContent)}))}))},945:function(){document.querySelectorAll(".timer").forEach((e=>{let t=6e4;function r(){let r=Math.floor(t/36e5),o=Math.floor(t%36e5/6e4),c=Math.floor(t%6e4/1e3);r=r<10?"0"+r:r,o=o<10?"0"+o:o,c=c<10?"0"+c:c,e.textContent=`${r}:${o}:${c}`,t-=1e3,t<0&&(clearInterval(n),e.textContent="00:00:00",document.querySelector(".btn-limited").disabled=!0)}r();let n=setInterval(r,1e3)}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";r(945),r(851)}()}();