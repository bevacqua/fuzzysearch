'use strict';

var test = require('tape');
var fuzzysearch = require('..');

test('fuzzysearch should match expectations', function (t) {
  t.equal(fuzzysearch('car', 'cartwheel'), true);
  t.equal(fuzzysearch('cwhl', 'cartwheel'), true);
  t.equal(fuzzysearch('cwheel', 'cartwheel'), true);
  t.equal(fuzzysearch('cartwheel', 'cartwheel'), true);
  t.equal(fuzzysearch('cwheeel', 'cartwheel'), false);
  t.equal(fuzzysearch('lw', 'cartwheel'), false);
  t.end();
});

test('fuzzysearch should curry', function (t) {
  var test = fuzzysearch('car');
  t.equal(test('cartwheel'), true);
  t.equal(test('boatwheel'), false);

  var things = ['cartwheel', 'boatwheel', 'wheels on the bus', 'car tire'];
  var result = things.map(test);
  t.deepEqual(result, [true, false, false, true]);

  var otherResult = things.filter(test);
  t.deepEqual(otherResult, ['cartwheel', 'car tire']);
  t.end();
});
