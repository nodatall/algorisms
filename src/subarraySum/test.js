import test from '../../testSetup.js'
import maxSubarray from './'

test('maxSubarray()', t => {
  const arr = [1,3,2,5,1,1,2,3]

  t.deepEqual(
    maxSubarray(arr, 8),
    [2,5,1],
    'returns a subarray whos sum equals the given value'
  )

  t.end()
})
