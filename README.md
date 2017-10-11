# fuzzysearch

> Tiny and blazing-fast fuzzy search in JavaScript

Fuzzy searching allows for flexibly matching a string with partial input, useful for filtering data very quickly based on lightweight user input.

# Demo

To see `fuzzysearch` in action, head over to [bevacqua.github.io/horsey][3], which is a demo of an autocomplete component that uses `fuzzysearch` to filter out results based on user input.

# Install

From `npm`

```shell
npm install --save fuzzysearch
```

# `fuzzysearch(needle, haystack)`

Returns `true` if `needle` matches `haystack` using a fuzzy-searching algorithm. Note that this program doesn't implement _[levenshtein distance][2]_, but rather a simplified version where **there's no approximation**. The method will return `true` only if each character in the `needle` can be found in the `haystack` and occurs after the preceding matches.

```js
fuzzysearch('twl', 'cartwheel') // <- true
fuzzysearch('cart', 'cartwheel') // <- true
fuzzysearch('cw', 'cartwheel') // <- true
fuzzysearch('ee', 'cartwheel') // <- true
fuzzysearch('art', 'cartwheel') // <- true
fuzzysearch('eeel', 'cartwheel') // <- false
fuzzysearch('dog', 'cartwheel') // <- false
```

An exciting application for this kind of algorithm is to filter options from an autocomplete menu, check out [horsey][3] for an example on how that might look like.

## Options

| Property | Description | Default |
| - | - | - |
| caseInsensitive | Does a case insensitive match | false |

# But! _`RegExp`s...!_

[![chart showing abysmal performance for regexp-based implementation][1]][4]

<sub>The current implementation uses the algorithm suggested by Mr. Aleph, a crazy russian compiler engineer working at V8.</sub>

# License

MIT

[1]: https://cloud.githubusercontent.com/assets/934293/6550014/d3a86174-c5fc-11e4-8334-b2e2b0d38fad.png
[2]: http://en.wikipedia.org/wiki/Levenshtein_distance
[3]: http://bevacqua.github.io/horsey
[4]: http://jsperf.com/fuzzysearch-regex/14
