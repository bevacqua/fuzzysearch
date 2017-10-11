'use strict';

function fuzzysearch (needle, haystack, opts) {
  var hlen = haystack.length;
  var nlen = needle.length;

  if (nlen > hlen) { return false; }

  if (opts && opts.caseInsensitive) {
    needle = needle.toLowerCase();
    haystack = haystack.toLowerCase();
  }

  var nIdx = 0, hIdx = 0;
  while (nIdx < nlen) {
    if (hIdx >= hlen) { return false; }
    if (needle.charCodeAt(nIdx) === haystack.charCodeAt(hIdx++)) { nIdx++; }
  }

  return true;
}

module.exports = fuzzysearch;
