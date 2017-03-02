const { equal } = require('assert')

const benchmark = require('../')

test('usage', () => {
  test('exports a function', () => {
    equal(typeof benchmark, 'function')
  })
})
