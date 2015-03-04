'use strict';

function fuzzysearch (query, text) {
  var i
    , character
    , currentIndex
    , lastIndex = -1
    , tlen = text.length
    , qlen = query.length;

  if (qlen > tlen) return false;
  if ((qlen === tlen && query === text) || (text.indexOf(query) > lastIndex)) return true;

  for (i = 0; i < qlen; i++) {
    character = query[i];
    currentIndex = text.indexOf(character, lastIndex + 1);
    if (currentIndex === -1) return false;
    lastIndex = currentIndex;
  }

  return true;
}

module.exports = fuzzysearch;
