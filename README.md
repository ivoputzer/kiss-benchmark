# kiss-benchmark

# installation [wip]

```
npm install --save-dev kiss-benchmark
```

# usage

[See tests][./test/index.js]

```javascript
const benchmark = require('kiss-benchmark')

const fast = () => Object.assign({}, {
  foo () {
    return 42 * 1000
  }
})
const slow = () => Object.assign({}, {
  foo: () => 42 * 1000
})

benchmark(fast, slow, 1000000, 'my assumption that "fast" is faster that "slow" is FALSE')
```

# test

```bash
MAX_RUNS=25000000 npm t
```
