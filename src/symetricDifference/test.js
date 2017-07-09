import test from '../../testSetup.js'
import symmetricDifference from './'

test('symmetricDifference()', t => {

  t.deepEqual(
    symmetricDifference([1, 2, 3], [5, 2, 1, 4]),
    [5,4,3],
    'returns the symmetric difference between two sets'
  )

  t.deepEqual(
    symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5]),
    [4,5,1],
    'returns the symmetric difference between two sets'
  )

  t.deepEqual(
    symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5]),
    [4,5,1],
    'returns the symmetric difference between three sets'
  )

  t.end()
})
