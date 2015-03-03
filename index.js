'use strict';

function fuzzysearch (query, text) {
  var i;
  var character;
  var currentIndex;
  var lastIndex = -1;
  if (query.length > text.length) {
    return false;
  }
  if (query === text) {
    return true;
  }
  if (text.indexOf(query) > lastIndex) {
    return true;
  }
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
