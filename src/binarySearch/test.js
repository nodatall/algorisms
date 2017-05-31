import test from '../../testSetup.js'
import binarySearch from './'

test('binarySearch()', t => {
  let arr = [1,3,8,2,9,2,5,6]

  t.equal(
    binarySearch(arr, 3),
    1,
    'returns the correct result'
  )

  t.end()
})
