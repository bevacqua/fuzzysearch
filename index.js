'use strict';

function fuzzysearch (needle, haystack) {
  var hlen = haystack.length;
  var nlen = needle.length;
  if (nlen > hlen) {
    return false;
  }
  if (nlen === hlen) {
    return needle === haystack;
  }
  for (var needleIndex = 0, haystackIndex = 0; needleIndex < nlen && haystackIndex < hlen;) {
    if (haystack.charCodeAt(haystackIndex++) === needle.charCodeAt(needleIndex)) {
      needleIndex++;
    }
  }
  return needleIndex === nlen;
}

module.exports = fuzzysearch;
