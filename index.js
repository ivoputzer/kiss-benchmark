const { test } = require('m.test')
const { ok } = require('assert')

const defaultMaxRuns = 1000000

module.exports = function kissBenchmark ({name, fastBenchmark, slowBenchmark, options = {}, failureMessage}) {
  const maxRuns = parseInt(process.env.MAX_RUNS || options.maxRuns || defaultMaxRuns)
  test('comparison-benchmark', () => {
    const [startFastBenchmarkHrTime, endFastBenchmarkHrTime] = bench(fastBenchmark, {maxRuns})
    const [startSlowBenchmarkHrTime, endSlowBenchmarkHrTime] = bench(slowBenchmark, {maxRuns})
    const fastBenchmarkDurationInNanos = startFastBenchmarkHrTime[0] * 1e9 + endFastBenchmarkHrTime[1]
    const slowBenchmarkDurationInNanos = startSlowBenchmarkHrTime[0] * 1e9 + endSlowBenchmarkHrTime[1] //  - fastBenchmarkDurationInNanos

    console.log(`Benchmark took ${startFastBenchmarkHrTime[0] * 1e9 + endSlowBenchmarkHrTime[1]} nanoseconds`)
    ok(slowBenchmarkDurationInNanos > fastBenchmarkDurationInNanos, failureMessage)
  })
}

function bench (fn, options = {}) {
  const { maxRuns } = options
  const startHrTime = process.hrtime(process.hrtime())
  for (let i = 0; i < maxRuns; i++) { fn() }
  return [startHrTime, process.hrtime(startHrTime)]
}
