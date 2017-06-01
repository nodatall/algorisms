import test from '../../testSetup.js'
import generateSubsets from './'

test('generateSubsets()', t => {
  let arr = [1,2,3]

  t.deepEqual(
    generateSubsets(arr),
    [ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ],
    'returns all subsets'
  )

  t.end()
})
