'use strict';

function fuzzysearch (query, text, cs) {
  var li = -1;
  query = cs ? query : query.toLowerCase();
  text = cs ? text : text.toLowerCase();
  if (text.indexOf(query) > li) {
    return true;
  }
  return query.split('').every(function (char) {
    var i = text.indexOf(char, li + 1);
    var t = li < i;
    return (li = i, t);
  });
};

module.exports = fuzzysearch;
