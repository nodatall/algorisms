import test from '../../testSetup.js'
import sortBinaryArrayInLinearTime from './'

test('sortBinaryArrayInLinearTime()', t => {
  let arr = [1, 0]

  t.true(
    Array.isArray(sortBinaryArrayInLinearTime(arr)),
    'returns an array'
  )

  arr = []

  t.deepEqual(
    sortBinaryArrayInLinearTime(arr),
    [],
    'returns an empty array'
  )

  arr = [1, 0, 1, 0, 1, 0, 0, 1]

  t.deepEqual(
    sortBinaryArrayInLinearTime(arr),
    [0, 0, 0, 0, 1, 1, 1, 1],
    'returns the correct result'
  )

  t.end()
})
