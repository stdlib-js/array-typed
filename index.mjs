// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-ctors@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-defaults@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";var i=n.get("dtypes.default"),m=t("complex64"),o=t("complex128");function l(){var n,l,p,j;if(l=(n=arguments.length)&&e(arguments[n-1])?arguments[n-=1]:i,null===(p=t(l)))throw new TypeError(d("02N2Y",l));return n<=0?new p(0):1===n?((j=arguments[0])instanceof m?j=r(j,0):j instanceof o&&(j=s(j,0)),new p(j)):2===n?new p(arguments[0],arguments[1]):new p(arguments[0],arguments[1],arguments[2])}export{l as default};
//# sourceMappingURL=index.mjs.map
