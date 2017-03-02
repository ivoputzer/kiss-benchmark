const { ok, equal, notThrows, throws } = require('assert')

const benchmark = require('../')
const slowBenchmark = () => { return Math.random() * 42 * Math.ceil(Math.PI * Math.random()) }
const fastBenchmark = () => 42

test('usage', () => {
  test('exports a function', () => {
    equal(typeof benchmark, 'function')
  })

  test('does not throw when assumption is true', () => {
    notThrows(benchmark(fastBenchmark, slowBenchmark, 10000), 'my assumption is FALSE')
  })

  test('throws when assumption is false', () => {
    throws(() => benchmark(slowBenchmark, fastBenchmark, 10000, 'my assumption is FALSE'), Error)
  })
})
