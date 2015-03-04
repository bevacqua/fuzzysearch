'use strict';
function escapeRegExp(str) {
  return str.replace(/[-{}()*+?.^$|[\]]/g, '\\$&');
}

function toReg(query) {
  var x = String(query).split('').map(escapeRegExp).join('.*?');
  x = '(?:' + x + ')';
  return new RegExp(x);
}

function fuzzysearch(query, text) {
  if (typeof query === 'string' && typeof text === 'string' && query.length && text.length) {
    return toReg(query).test(text);
  }
  return false;
}
module.exports = fuzzysearch;
