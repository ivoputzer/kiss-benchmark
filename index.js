const { test } = require('m.test')
const { ok } = require('assert')

const defaultMaxRuns = 1000000

module.exports = function kissBenchmark (fastBenchmark, slowBenchmark, options = {}, failureMessage) {
  const maxRuns = parseInt(options.maxRuns || process.env.MAX_RUNS || defaultMaxRuns)
  test('comparison-benchmark', () => {
    const [startFastBenchmarkHrTime, endFastBenchmarkHrTime] = bench(fastBenchmark, {maxRuns})
    const [startSlowBenchmarkHrTime, endSlowBenchmarkHrTime] = bench(slowBenchmark, {maxRuns})
    const fastBenchmarkDurationInNanos = startFastBenchmarkHrTime[0] * 1e9 + endFastBenchmarkHrTime[1]
    const slowBenchmarkDurationInNanos = fastBenchmarkDurationInNanos - startSlowBenchmarkHrTime[0] * 1e9 + endSlowBenchmarkHrTime[1]

    console.log(`Benchmark took ${startFastBenchmarkHrTime[0] * 1e9 + endSlowBenchmarkHrTime[1]} nanoseconds`)
    ok(slowBenchmarkDurationInNanos < fastBenchmarkDurationInNanos, failureMessage)
  })
}

function bench (fn, options = {}) {
  const {maxRuns} = options
  const startHrTime = process.hrtime()
  for (let i = 0; i < maxRuns; i++) { fn() }
  return [startHrTime, process.hrtime(startHrTime)]
}
