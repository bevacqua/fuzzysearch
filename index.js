'use strict';
var escapeRegExp = function(str) {
  return str.replace(/[{}()*+?.^$|[\]]/g, '\\$&');
};
var toReg = function(query) {
  var x = String(query).split('').map(function(c) {
    return escapeRegExp(c);
  }).join('.*?');
  x = '(?:' + x + ')';
  return new RegExp(x);
};
var fuzzysearch = function(query, text) {
  if (typeof query === 'string' && typeof text === 'string' && query.length && text.length) {
    return toReg(query).test(text);
  }
  return false;
};
module.exports = fuzzysearch;
