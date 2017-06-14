import test from '../../testSetup.js'
import twoSum, { binary2Sum } from './'

test('2Sum()', t => {

  const arr = [9,7,5,6,10,1,9,4]

  t.deepEqual(
    twoSum(arr, 12),
    [5,7],
    'returns a subarray whos sum equals the given value'
  )
  t.deepEqual(
    binary2Sum(arr, 12),
    [5,7],
    'returns a subarray whos sum equals the given value'
  )

  t.end()
})
