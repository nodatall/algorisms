import test from '../../testSetup.js'
import slidingWindowMinimum from './'

test( 'slidingWindowMinimum', t => {

  const arr = [2,1,4,5,3,4,1,2]

  t.deepEqual(
    slidingWindowMinimum(arr, 4),
    [1,1,3,1,1],
    'returns a subarray of minimum elements for each window in the array'
  )

  t.end()
})
