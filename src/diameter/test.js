import test from '../../testSetup.js'
import diameter from './'

test('diameter()', t => {
  const tree = [
    [3, 4, 1],
    [0, 5],
    [3],
    [0, 2, 6],
    [0],
    [1],
    [3]
  ]

  t.deepEqual(
    diameter(tree),
    4,
    'returns the diameter of the tree'
  )

  t.end()
})
