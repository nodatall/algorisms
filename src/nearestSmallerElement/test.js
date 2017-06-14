import test from '../../testSetup.js'
import nearestSmallerElement from './'

test( 'nearestSmallerElement', t => {

  const arr = [1,3,4,2,5,3,4,2]

  t.equal(
    nearestSmallerElement(arr, 7),
    0,
    'returns a subarray of three values whos sum equals the given value'
  )

  t.end()
})
