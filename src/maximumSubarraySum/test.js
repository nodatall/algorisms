import test from '../../testSetup.js'
import maximumSubarraySum from './'

test('maximumSubarraySum()', t => {
  let arr = [-1,2,4,-3,5,2,-5,2]

  t.equal(
    maximumSubarraySum(arr),
    10,
    'returns the correct result'
  )

  t.end()
})
