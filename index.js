'use strict';

function fuzzysearch (query, text) {
  var i;
  var character;
  var currentIndex;
  var lastIndex = -1;
  for (i = 0; i < query.length; i++) {
    character = query[i];
    currentIndex = text.indexOf(character, lastIndex + 1);
    if (currentIndex === -1) {
      return false;
    }
    lastIndex = currentIndex;
  }
  return true;
}

module.exports = fuzzysearch;
