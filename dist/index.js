"use strict";var s=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var u=s(function(A,i){"use strict";var o=require("@stdlib/assert-is-string").isPrimitive,n=require("@stdlib/array-typed-ctors"),v=require("@stdlib/strided-base-reinterpret-complex128"),l=require("@stdlib/strided-base-reinterpret-complex64"),m=require("@stdlib/strided-base-reinterpret-boolean"),g=require("@stdlib/array-defaults"),f=require("@stdlib/string-format"),p=g.get("dtypes.default"),c=n("complex64"),d=n("complex128"),y=n("bool");function q(){var e,a,t,r;if(e=arguments.length,e&&o(arguments[e-1])?(e-=1,a=arguments[e]):a=p,t=n(a),t===null)throw new TypeError(f("invalid argument. Must provide a recognized data type. Value: `%s`.",a));return e<=0?new t(0):e===1?(r=arguments[0],r instanceof c?r=l(r,0):r instanceof d?r=v(r,0):r instanceof y&&(r=m(r,0)),new t(r)):e===2?new t(arguments[0],arguments[1]):new t(arguments[0],arguments[1],arguments[2])}i.exports=q});var w=u();module.exports=w;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
