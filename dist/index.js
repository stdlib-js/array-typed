"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=s(function(w,i){
var m=require('@stdlib/assert-is-string/dist').isPrimitive,n=require('@stdlib/array-typed-ctors/dist'),v=require('@stdlib/strided-base-reinterpret-complex128/dist'),g=require('@stdlib/strided-base-reinterpret-complex64/dist'),o=require('@stdlib/array-defaults/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),f=o.get("dtypes.default"),l=n("complex64"),c=n("complex128");function d(){var r,e,a,t;if(r=arguments.length,r&&m(arguments[r-1])?(r-=1,e=arguments[r]):e=f,a=n(e),a===null)throw new TypeError(p('02N2Y',e));return r<=0?new a(0):r===1?(t=arguments[0],t instanceof l?t=g(t,0):t instanceof c&&(t=v(t,0)),new a(t)):r===2?new a(arguments[0],arguments[1]):new a(arguments[0],arguments[1],arguments[2])}i.exports=d
});var y=u();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
