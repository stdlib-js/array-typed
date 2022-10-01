// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).typedarray=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,y,s;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(e,r,t.get),s&&a&&a.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(e){return"string"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return s&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function g(e,r){return null!=e&&m.call(e,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var b=h()?function(e){var r,t,n;if(null==e)return p.call(e);t=e[w],r=g(e,w);try{e[w]=void 0}catch(r){return p.call(e)}return n=p.call(e),r?e[w]=t:delete e[w],n}:function(e){return p.call(e)},v=String.prototype.valueOf;var d=h();function E(e){return"object"==typeof e&&(e instanceof String||(d?function(e){try{return v.call(e),!0}catch(e){return!1}}(e):"[object String]"===b(e)))}function _(e){return y(e)||E(e)}c(_,"isPrimitive",y),c(_,"isObject",E);var T="function"==typeof Float64Array;var A="function"==typeof Float64Array?Float64Array:null;var j="function"==typeof Float64Array?Float64Array:void 0;var x=function(){var e,r,t;if("function"!=typeof A)return!1;try{r=new A([1,3.14,-3.14,NaN]),t=r,e=(T&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?j:function(){throw new Error("not implemented")},B="function"==typeof Float32Array;var L=Number.POSITIVE_INFINITY,S="function"==typeof Float32Array?Float32Array:null;var R="function"==typeof Float32Array?Float32Array:void 0;var V=function(){var e,r,t;if("function"!=typeof S)return!1;try{r=new S([1,3.14,-3.14,5e40]),t=r,e=(B&&t instanceof Float32Array||"[object Float32Array]"===b(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===L}catch(r){e=!1}return e}()?R:function(){throw new Error("not implemented")},k="function"==typeof Int16Array;var I="function"==typeof Int16Array?Int16Array:null;var O="function"==typeof Int16Array?Int16Array:void 0;var M=function(){var e,r,t;if("function"!=typeof I)return!1;try{r=new I([1,3.14,-3.14,32768]),t=r,e=(k&&t instanceof Int16Array||"[object Int16Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?O:function(){throw new Error("not implemented")},C="function"==typeof Int32Array;var N="function"==typeof Int32Array?Int32Array:null;var P="function"==typeof Int32Array?Int32Array:void 0;var U=function(){var e,r,t;if("function"!=typeof N)return!1;try{r=new N([1,3.14,-3.14,2147483648]),t=r,e=(C&&t instanceof Int32Array||"[object Int32Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?P:function(){throw new Error("not implemented")},F="function"==typeof Int8Array;var Y="function"==typeof Int8Array?Int8Array:null;var W="function"==typeof Int8Array?Int8Array:void 0;var G=function(){var e,r,t;if("function"!=typeof Y)return!1;try{r=new Y([1,3.14,-3.14,128]),t=r,e=(F&&t instanceof Int8Array||"[object Int8Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?W:function(){throw new Error("not implemented")},J="function"==typeof Uint16Array;var X="function"==typeof Uint16Array?Uint16Array:null;var q="function"==typeof Uint16Array?Uint16Array:void 0;var z=function(){var e,r,t;if("function"!=typeof X)return!1;try{r=new X(r=[1,3.14,-3.14,65536,65537]),t=r,e=(J&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?q:function(){throw new Error("not implemented")},D="function"==typeof Uint32Array;var H="function"==typeof Uint32Array?Uint32Array:null;var K="function"==typeof Uint32Array?Uint32Array:void 0;var Q=function(){var e,r,t;if("function"!=typeof H)return!1;try{r=new H(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(D&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?K:function(){throw new Error("not implemented")},Z="function"==typeof Uint8Array;var $="function"==typeof Uint8Array?Uint8Array:null;var ee="function"==typeof Uint8Array?Uint8Array:void 0;var re=function(){var e,r,t;if("function"!=typeof $)return!1;try{r=new $(r=[1,3.14,-3.14,256,257]),t=r,e=(Z&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ee:function(){throw new Error("not implemented")},te="function"==typeof Uint8ClampedArray;var ne="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var oe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ie=function(){var e,r,t;if("function"!=typeof ne)return!1;try{r=new ne([-1,0,1,3.14,4.99,255,256]),t=r,e=(te&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===b(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?oe:function(){throw new Error("not implemented")};function ae(e){return"number"==typeof e}var ue=Number,fe=ue.prototype.toString;var le=h();function ce(e){return"object"==typeof e&&(e instanceof ue||(le?function(e){try{return fe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===b(e)))}function ye(e){return ae(e)||ce(e)}c(ye,"isPrimitive",ae),c(ye,"isObject",ce);var se=ue.NEGATIVE_INFINITY,he=Math.floor;function pe(e){return he(e)===e}function me(e){return e<L&&e>se&&pe(e)}function ge(e){return ae(e)&&me(e)}function we(e){return ce(e)&&me(e.valueOf())}function be(e){return ge(e)||we(e)}function ve(e){return ge(e)&&e>=0}function de(e){return we(e)&&e.valueOf()>=0}function Ee(e){return ve(e)||de(e)}c(be,"isPrimitive",ge),c(be,"isObject",we),c(Ee,"isPrimitive",ve),c(Ee,"isObject",de);function _e(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&pe(e.length)&&e.length>=0&&e.length<=4294967295}function Te(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&pe(e.length)&&e.length>=0&&e.length<=9007199254740991}var Ae="function"==typeof ArrayBuffer;function je(e){return Ae&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===b(e)}var xe=Array.isArray?Array.isArray:function(e){return"[object Array]"===b(e)};function Be(e){return"object"==typeof e&&null!==e&&!xe(e)}var Le=/./;function Se(e){return"boolean"==typeof e}var Re=Boolean.prototype.toString;var Ve=h();function ke(e){return"object"==typeof e&&(e instanceof Boolean||(Ve?function(e){try{return Re.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===b(e)))}function Ie(e){return Se(e)||ke(e)}function Oe(){return new Function("return this;")()}c(Ie,"isPrimitive",Se),c(Ie,"isObject",ke);var Me="object"==typeof self?self:null,Ce="object"==typeof window?window:null,Ne="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Pe="object"==typeof Ne?Ne:null;var Ue=function(e){if(arguments.length){if(!Se(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Oe()}if(Me)return Me;if(Ce)return Ce;if(Pe)return Pe;throw new Error("unexpected error. Unable to resolve global object.")}(),Fe=Ue.document&&Ue.document.childNodes,Ye=Int8Array;function We(){return/^\s*function\s*([^(]*)/i}var Ge=/^\s*function\s*([^(]*)/i;function Je(e){return null!==e&&"object"==typeof e}function Xe(e){var r,t,n,o;if(("Object"===(t=b(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ge.exec(n.toString()))return r[1]}return Je(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}c(We,"REGEXP",Ge),c(Je,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!xe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Je));var qe="function"==typeof Le||"object"==typeof Ye||"function"==typeof Fe?function(e){return Xe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Xe(e).toLowerCase():r};function ze(e){return"function"===qe(e)}function De(e,r){if(!(this instanceof De))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ae(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!ae(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}c(De,"BYTES_PER_ELEMENT",8),c(De.prototype,"BYTES_PER_ELEMENT",8),c(De.prototype,"byteLength",16),c(De.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(De.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var He="function"==typeof Math.fround?Math.fround:null,Ke=new V(1);var Qe="function"==typeof He?He:function(e){return Ke[0]=e,Ke[0]};function Ze(e,r){if(!(this instanceof Ze))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ae(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!ae(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Qe(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Qe(r)}),this}function $e(e){return e instanceof De||e instanceof Ze||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function er(e){return pe(e/2)}function rr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c(Ze,"BYTES_PER_ELEMENT",4),c(Ze.prototype,"BYTES_PER_ELEMENT",4),c(Ze.prototype,"byteLength",8),c(Ze.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(Ze.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var tr=rr()?Symbol.iterator:null;function nr(e,r,t){l(e,r,{configurable:!1,enumerable:!1,get:t})}function or(e){return e.re}function ir(e){return e.im}function ar(e,r){return new V(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function ur(e,r){return new x(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function fr(e,r){return e[r]}function lr(e,r){return e.get(r)}function cr(e,r,t){e[r]=t}function yr(e,r,t){e.set(t,r)}function sr(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?lr:fr,setter:r?yr:cr}}function hr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(_e(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!$e(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(or(n),ir(n))}return r}function pr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,_e(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!$e(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(or(i),ir(i))}return n}function mr(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!$e(n=r[o]))return null;e[i]=or(n),e[i+1]=ir(n),i+=2}return e}var gr=2*V.BYTES_PER_ELEMENT,wr=rr();function br(e){return e instanceof _r||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function vr(e){return e===_r||"Complex128Array"===e.name}function dr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===gr}function Er(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*gr}function _r(){var e,r,t,n;if(r=arguments.length,!(this instanceof _r))return 0===r?new _r:1===r?new _r(arguments[0]):2===r?new _r(arguments[0],arguments[1]):new _r(arguments[0],arguments[1],arguments[2]);if(0===r)t=new V(0);else if(1===r)if(ve(arguments[0]))t=new V(2*arguments[0]);else if(Te(arguments[0]))if((n=(t=arguments[0]).length)&&xe(t)&&$e(t[0])){if(null===(t=mr(new V(2*n),t))){if(!er(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new V(arguments[0])}}else{if(dr(t))t=ar(t,0);else if(Er(t))t=ur(t,0);else if(!er(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new V(t)}else if(je(arguments[0])){if(!pe((t=arguments[0]).byteLength/gr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+gr+". Byte length: `"+t.byteLength+"`.");t=new V(t)}else{if(!Be(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===wr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!ze(t[tr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!ze((t=t[tr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=hr(t))instanceof Error)throw t;t=new V(t)}else{if(!je(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!ve(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!pe(e/gr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+gr+". Value: `"+e+"`.");if(2===r){if(!pe((n=t.byteLength-e)/gr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+gr+". View byte length: `"+n+"`.");t=new V(t,e)}else{if(!ve(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*gr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*gr+"`.");t=new V(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function Tr(e){return e.re}function Ar(e){return e.im}function jr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(_e(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!$e(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(Tr(n),Ar(n))}return r}function xr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,_e(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!$e(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Tr(i),Ar(i))}return n}function Br(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!$e(n=r[o]))return null;e[i]=Tr(n),e[i+1]=Ar(n),i+=2}return e}c(_r,"BYTES_PER_ELEMENT",gr),c(_r,"name","Complex64Array"),c(_r,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!ze(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!ze(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(br(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if($e(l=n.call(r,e.get(c),c)))i[y]=or(l),i[y+1]=ir(l);else{if(!(_e(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Te(e)){if(n){for(u=e.length,a=sr(e),c=0;c<u;c++)if(!$e(a.getter(e,c))){f=!0;break}if(f){if(!er(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if($e(l=n.call(r,a.getter(e,c),c)))i[y]=or(l),i[y+1]=ir(l);else{if(!(_e(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Be(e)&&wr&&ze(e[tr])){if(!ze((i=e[tr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?pr(i,n,r):hr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(_r,"of",(function(){var e,r;if(!ze(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),nr(_r.prototype,"buffer",(function(){return this._buffer.buffer})),nr(_r.prototype,"byteLength",(function(){return this._buffer.byteLength})),nr(_r.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(_r.prototype,"BYTES_PER_ELEMENT",_r.BYTES_PER_ELEMENT),c(_r.prototype,"copyWithin",(function(e,r){if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(_r.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new Ze(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),tr&&c(t,tr,(function(){return r.entries()})),t})),c(_r.prototype,"get",(function(e){var r;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ve(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new Ze((r=this._buffer)[e*=2],r[e+1])})),nr(_r.prototype,"length",(function(){return this._length})),c(_r.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ve(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if($e(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=or(e),void(n[t+1]=ir(e))}if(br(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*gr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new V(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Te(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!$e(e[f])){i=!0;break}if(i){if(!er(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*gr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new V(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=or(u),n[t+1]=ir(u),t+=2}}));var Lr=2*x.BYTES_PER_ELEMENT,Sr=rr();function Rr(e){return e instanceof Or||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Vr(e){return e===Or||"Complex64Array"===e.name}function kr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Lr/2}function Ir(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Lr}function Or(){var e,r,t,n;if(r=arguments.length,!(this instanceof Or))return 0===r?new Or:1===r?new Or(arguments[0]):2===r?new Or(arguments[0],arguments[1]):new Or(arguments[0],arguments[1],arguments[2]);if(0===r)t=new x(0);else if(1===r)if(ve(arguments[0]))t=new x(2*arguments[0]);else if(Te(arguments[0]))if((n=(t=arguments[0]).length)&&xe(t)&&$e(t[0])){if(null===(t=Br(new x(2*n),t))){if(!er(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new x(arguments[0])}}else{if(kr(t))t=ar(t,0);else if(Ir(t))t=ur(t,0);else if(!er(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new x(t)}else if(je(arguments[0])){if(!pe((t=arguments[0]).byteLength/Lr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Lr+". Byte length: `"+t.byteLength+"`.");t=new x(t)}else{if(!Be(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Sr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!ze(t[tr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!ze((t=t[tr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=jr(t))instanceof Error)throw t;t=new x(t)}else{if(!je(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!ve(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!pe(e/Lr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Lr+". Value: `"+e+"`.");if(2===r){if(!pe((n=t.byteLength-e)/Lr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Lr+". View byte length: `"+n+"`.");t=new x(t,e)}else{if(!ve(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Lr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Lr+"`.");t=new x(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Or,"BYTES_PER_ELEMENT",Lr),c(Or,"name","Complex128Array"),c(Or,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!ze(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!ze(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Rr(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if($e(l=n.call(r,e.get(c),c)))i[y]=Tr(l),i[y+1]=Ar(l);else{if(!(_e(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Te(e)){if(n){for(u=e.length,a=sr(e),c=0;c<u;c++)if(!$e(a.getter(e,c))){f=!0;break}if(f){if(!er(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if($e(l=n.call(r,a.getter(e,c),c)))i[y]=Tr(l),i[y+1]=Ar(l);else{if(!(_e(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Be(e)&&Sr&&ze(e[tr])){if(!ze((i=e[tr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?xr(i,n,r):jr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Or,"of",(function(){var e,r;if(!ze(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Vr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),nr(Or.prototype,"buffer",(function(){return this._buffer.buffer})),nr(Or.prototype,"byteLength",(function(){return this._buffer.byteLength})),nr(Or.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Or.prototype,"BYTES_PER_ELEMENT",Or.BYTES_PER_ELEMENT),c(Or.prototype,"copyWithin",(function(e,r){if(!Rr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Or.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Rr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new De(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),tr&&c(t,tr,(function(){return r.entries()})),t})),c(Or.prototype,"get",(function(e){var r;if(!Rr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ve(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new De((r=this._buffer)[e*=2],r[e+1])})),nr(Or.prototype,"length",(function(){return this._length})),c(Or.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Rr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ve(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if($e(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Tr(e),void(n[t+1]=Ar(e))}if(Rr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Lr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new x(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Te(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!$e(e[f])){i=!0;break}if(i){if(!er(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Lr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new x(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Tr(u),n[t+1]=Ar(u),t+=2}}));var Mr={float64:x,float32:V,int16:M,int32:U,int8:G,uint16:z,uint32:Q,uint8:re,uint8c:ie,complex64:_r,complex128:Or};function Cr(e){return Mr[e]||null}function Nr(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var Pr=Cr("complex64"),Ur=Cr("complex128");return function(){var e,r,t,n;if(null===(t=Cr(r=(e=arguments.length)&&y(arguments[e-1])?arguments[e-=1]:"float64")))throw new TypeError(Nr("01B2k",r));return e<=0?new t(0):1===e?((n=arguments[0])instanceof Pr?n=ar(n,0):n instanceof Ur&&(n=ur(n,0)),new t(n)):2===e?new t(arguments[0],arguments[1]):new t(arguments[0],arguments[1],arguments[2])}}));
//# sourceMappingURL=index.js.map
