import test from '../../testSetup.js'
import distancesBetweenNodes from './'

const tree = [
  [3, 4, 1],
  [0, 5],
  [3],
  [0, 2, 6],
  [0],
  [1],
  [3]
]

const result = [
  [2, 1, 2],
  [3, 1],
  [4],
  [3, 1, 1],
  [3],
  [4],
  [4]
]

test('distancesBetweenNodes()', t => {

  t.deepEqual(
    distancesBetweenNodes(tree),
    result,
    'returns the maximum distance in each direction for each node'
  )

  t.end()
})
