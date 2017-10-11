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

  // options
  t.equal(fuzzysearch('car', 'Cartwheel'), false);
  t.equal(fuzzysearch('car', 'Cartwheel', { caseInsensitive: true }), true);
  // end options

  t.end();
});
