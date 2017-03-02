# kiss-benchmark

[![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]
[travis-image]: https://img.shields.io/travis/christian-fei/kiss-benchmark.svg?style=flat
[travis-url]: https://travis-ci.org/christian-fei/kiss-benchmark
[npm-image]: https://img.shields.io/npm/v/kiss-benchmark.svg?style=flat
[npm-url]: https://npmjs.org/package/kiss-benchmark
[downloads-image]: https://img.shields.io/npm/dm/kiss-benchmark.svg?style=flat
[downloads-url]: https://npmjs.org/package/kiss-benchmark

# installation [wip]

```
npm install --save-dev kiss-benchmark
```

# usage

[See tests][./test/index.js]

```javascript
const benchmark = require('kiss-benchmark')

const slowBenchmark = () => { return Math.random() * 42 * Math.ceil(Math.PI * Math.random()) }
const fastBenchmark = () => 42
const benchmarkOptions = {maxRuns: 10000}

benchmark({
  name: 'benchmark-test-not-throws',
  fastBenchmark,
  slowBenchmark,
  options: {},
  failureMessage: 'my assumption is FALSE'
})
```

# test

```bash
MAX_RUNS=25000000 npm t
```
