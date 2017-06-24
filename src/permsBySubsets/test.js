import test from '../../testSetup.js'
import permsBySubsets from './'

test('permsBySubsets()', t => {

  t.equal(
    permsBySubsets(4),
    2,
    'returns a subarray whos sum equals the given value'
  )

  t.end()
})
