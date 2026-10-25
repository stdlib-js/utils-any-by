"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var v=f(function(q,s){
var m=require('@stdlib/assert-is-collection/dist'),o=require('@stdlib/assert-is-function/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function g(e,r,a){var n,t,u;if(!m(e))throw new TypeError(i('1QhAh',e));if(!o(r))throw new TypeError(i('1Qh2H',r));for(t=e.length,u=0;u<t;u++){if(n=r.call(a,e[u],u,e),n)return!0;t=e.length}return!1}s.exports=g
});var h=v();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
