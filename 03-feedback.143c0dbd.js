!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},l={},n=t.parcelRequire4c75;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},t.parcelRequire4c75=n);var o=n("1WSnx"),r=document.querySelector(".feedback-form"),i=(r.addEventListener("input",e(o).throttle((function(e){e.preventDefault();var t=e.currentTarget.elements,a=t.email,l=t.message;(function(e,t){u.email=e,u.message=t,localStorage.setItem(i,JSON.stringify(u))})(a.value,l.value),s()}),500)),r.addEventListener("submit",(function(e){e.preventDefault(),console.log(r.email.value),console.log(r.message.value),e.currentTarget.reset(),localStorage.removeItem(i)})),"feedback-form-state"),u={email:"",message:""};function s(){var e=JSON.parse(localStorage.getItem(i));console.log(e),null===e?(r.email.value="",r.message.value=""):(r.email.value=e.email,r.message.value=e.message)}s()}();
//# sourceMappingURL=03-feedback.143c0dbd.js.map
