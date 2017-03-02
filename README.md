# kiss-benchmark

# installation [wip]

```
npm install --save-dev kiss-benchmark
```

# usage

```

const benchmark = require('kiss-benchmark')

const fast = () => Object.assign({}, {
  foo () {
    return 42 * 1000
  }
})
const slow = () => Object.assign({}, {
  foo: () => 42 * 1000
})

benchmark(fast, slow, 'my assumption that "fast" is faster that "slow" is correct')
```
