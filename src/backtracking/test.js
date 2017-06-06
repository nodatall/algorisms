import test from '../../testSetup.js'
import backtrack from './'

test('backtrack()', t => {

  t.equal(
    backtrack(8),
    92,
    'returns number of ways to place queens on a board without attacking each other'
  )

  t.end()
})
