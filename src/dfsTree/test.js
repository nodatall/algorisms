import test from '../../testSetup.js'
import dfsTree from './'

test('dfsTree()', t => {
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
    dfsTree(tree),
    [0, 3, 2, 6, 4, 1, 5],
    'returns the depth first path through the tree'
  )

  t.end()
})
