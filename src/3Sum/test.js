import test from '../../testSetup.js'
import threeSum from './'

test( '3Sum()', t => {

  const arr = [9,7,5,6,10,1,9,4]

  t.deepEqual(
    threeSum(arr, 22),
    [9,4,9],
    'returns a subarray of three values whos sum equals the given value'
  )

  t.end()
})
