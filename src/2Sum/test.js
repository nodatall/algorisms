import test from '../../testSetup.js'
import twoSum from './'

test('twoSum()', t => {
  const arr = [9,7,5,6,10,1,9,4]

  t.deepEqual(
    twoSum(arr, 12),
    [5,7],
    'returns a subarray whos sum equals the given value'
  )

  t.end()
})
