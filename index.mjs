// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-ctors@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";var i=t("complex64"),d=t("complex128");function m(){var m,o,l,p;if(o=(m=arguments.length)&&e(arguments[m-1])?arguments[m-=1]:"float64",null===(l=t(o)))throw new TypeError(n("02N2Y,KZ",o));return m<=0?new l(0):1===m?((p=arguments[0])instanceof i?p=r(p,0):p instanceof d&&(p=s(p,0)),new l(p)):2===m?new l(arguments[0],arguments[1]):new l(arguments[0],arguments[1],arguments[2])}export{m as default};
//# sourceMappingURL=index.mjs.map