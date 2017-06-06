import test from '../../testSetup.js'
import generatePermutations from './'

test('generatePermutations()', t => {
  const arr = [1,2,3]

  t.deepEqual(
    generatePermutations(arr),
    [ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ], [ 2, 3, 1 ], [ 3, 1, 2 ], [ 3, 2, 1 ] ],
    'returns an array of permutations'
  )

  t.end()
})
