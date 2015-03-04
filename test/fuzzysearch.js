'use strict';

var test = require('tape');
var fuzzysearch = require('..');

test('fuzzysearch should match substrings', function (t) {
  t.equal(fuzzysearch('car', 'cartwheel'), true);
  t.equal(fuzzysearch('wheel', 'cartwheel'), true);
  t.equal(fuzzysearch('cartwheel', 'cartwheel'), true);
  t.end();
});
test('fuzzysearch should find fuzzy matches', function (t) {
  t.equal(fuzzysearch('cwhl', 'cartwheel'), true);
  t.equal(fuzzysearch('cwheel', 'cartwheel'), true);
  t.equal(fuzzysearch('cartwhel', 'cartwheel'), true);
  t.end();
});
test('fuzzysearch should not match invalid input', function (t) {
  t.equal(fuzzysearch(), false);
  t.equal(fuzzysearch(null), false);
  t.equal(fuzzysearch(null, ''), false);
  t.equal(fuzzysearch(null, null), false);
  t.equal(fuzzysearch('', null), false);
  t.end();
});
test('fuzzysearch should not find fuzzy matches', function (t) {
  t.equal(fuzzysearch('wche', 'cartwheel'), false);
  t.equal(fuzzysearch('cwheeel', 'cartwheel'), false);
  t.equal(fuzzysearch('lw', 'cartwheel'), false);
  t.end();
});
