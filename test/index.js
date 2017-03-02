const { equal, notThrows, throws } = require('assert')

const benchmark = require('../')
const slowBenchmark = () => { return Math.random() * 42 * Math.ceil(Math.PI * Math.random()) }
const fastBenchmark = () => 42

const benchmarkOptions = {maxRuns: 10000}
test('usage', () => {
  test('exports a function', () => {
    equal(typeof benchmark, 'function')
  })

  test('does not throw when assumption is true', () => {
    notThrows(benchmark(fastBenchmark, slowBenchmark, benchmarkOptions), 'my assumption is FALSE')
  })

  test('throws when assumption is false', () => {
    throws(() => benchmark(slowBenchmark, fastBenchmark, benchmarkOptions, 'my assumption is FALSE'), Error)
  })
})
