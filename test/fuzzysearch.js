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

  // chinese unicode testcase
  t.equal(fuzzysearch('语言', 'php语言'), true);
  t.equal(fuzzysearch('hp语', 'php语言'), true);
  t.equal(fuzzysearch('Py开发', 'Python开发者'), true);
  t.equal(fuzzysearch('Py 开发', 'Python开发者'), false);
  t.equal(fuzzysearch('爪哇进阶', '爪哇开发进阶'), true);
  t.equal(fuzzysearch('格式工具', '非常简单的格式化工具'), true);
  t.equal(fuzzysearch('正则', '学习正则表达式怎么学习'), true);
  t.equal(fuzzysearch('学习正则', '正则表达式怎么学习'), false);
  // end chinese unicode testcase

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
