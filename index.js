;(function() {
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
    outer: for (var i = 0, j = 0; i < nlen; i++) {
      var nch = needle.charCodeAt(i);
      while (j < hlen) {
        if (haystack.charCodeAt(j++) === nch) {
          continue outer;
        }
      }
      return false;
    }
    return true;
  }

  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = fuzzysearch;
  } else if (typeof define === 'function' && define.amd) {
    define(function() {
      return fuzzysearch;
    });
  } else {
    this.fuzzysearch = fuzzysearch;
  }

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());
