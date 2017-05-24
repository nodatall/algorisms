import test from '../../testSetup.js'
import findADuplicateElementInALimitedRangeArray from './'

test('findADuplicateElementInALimitedRangeArray()', t => {
  let arr = [1, 2, 3, 4, 4 ]

  t.deepEqual(
    findADuplicateElementInALimitedRangeArray(arr),
    4,
    'returns the correct result'
  )

  arr = [1, 2, 3, 4, 2]

  t.deepEqual(
    findADuplicateElementInALimitedRangeArray(arr),
    2,
    'returns the correct result'
  )

  t.end()
})
