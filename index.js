const { test } = require('m.test')
const { ok } = require('assert')

module.exports = function kissBenchmark (fastBenchmark, slowBenchmark, maxRuns, failureMessage) {
  maxRuns = parseInt(maxRuns || process.env.MAX_RUNS || 1000000)
  test('comparison-benchmark', () => {
    const startFastBenchmarkHrTime = process.hrtime()
    for (let i = 0; i < maxRuns; i++) {
      slowBenchmark()
    }
    const endFastBenchmarkHrTime = process.hrtime(startFastBenchmarkHrTime)

    const startSlowBenchmarkHrTime = process.hrtime()
    for (let i = 0; i < maxRuns; i++) {
      fastBenchmark()
    }
    const endSlowBenchmarkHrTime = process.hrtime(startSlowBenchmarkHrTime)

    const fastBenchmarkDurationInNanos = startFastBenchmarkHrTime[0] * 1e9 + endFastBenchmarkHrTime[1]
    const slowBenchmarkDurationInNanos = fastBenchmarkDurationInNanos - startSlowBenchmarkHrTime[0] * 1e9 + endSlowBenchmarkHrTime[1]

    console.log(`Benchmark took ${startFastBenchmarkHrTime[0] * 1e9 + endSlowBenchmarkHrTime[1]} nanoseconds`)
    ok(slowBenchmarkDurationInNanos < fastBenchmarkDurationInNanos, failureMessage)
  })
}
