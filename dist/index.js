"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=s(function(d,i){
var m=require('@stdlib/assert-is-string/dist').isPrimitive,n=require('@stdlib/array-typed-ctors/dist'),o=require('@stdlib/strided-base-reinterpret-complex128/dist'),g=require('@stdlib/strided-base-reinterpret-complex64/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist'),p=n("complex64"),f=n("complex128");function l(){var r,e,a,t;if(r=arguments.length,r&&m(arguments[r-1])?(r-=1,e=arguments[r]):e="float64",a=n(e),a===null)throw new TypeError(v('02N2Y',e));return r<=0?new a(0):r===1?(t=arguments[0],t instanceof p?t=g(t,0):t instanceof f&&(t=o(t,0)),new a(t)):r===2?new a(arguments[0],arguments[1]):new a(arguments[0],arguments[1],arguments[2])}i.exports=l
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
