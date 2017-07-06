import test from '../../testSetup.js'
import floydWalrus from './'

test('floydWalrus()', t => {
  const pathMatrix = [
    [0, 5, 0, 9, 1],
    [5, 0, 2, 0, 0],
    [0, 2, 0, 7, 0],
    [9, 0, 7, 0, 2],
    [1, 0, 0, 2, 0]
  ]

  t.deepEqual(
    floydWalrus(pathMatrix),
    [
      [0, 5, 7, 3, 1],
      [5, 0, 2, 8, 6],
      [7, 2, 0, 7, 8],
      [3, 8, 7, 0, 2],
      [1, 6, 8, 2, 0]
    ],
    'returns smallest distances to all nodes from all nodes'
  )

  t.end()
})
