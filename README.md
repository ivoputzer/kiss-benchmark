# kiss-benchmark

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
