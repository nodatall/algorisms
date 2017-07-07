import test from '../../testSetup.js'
import diameter, { doubleDFSDiameter } from './'

const tree = [
  [3, 4, 1],
  [0, 5],
  [3],
  [0, 2, 6],
  [0],
  [1],
  [3]
]

test('diameter()', t => {

  t.deepEqual(
    diameter(tree),
    4,
    'returns the diameter of the tree'
  )

  t.end()
})

test('doubleDFSDiameter()', t => {

  t.deepEqual(
    doubleDFSDiameter(tree),
    4,
    'returns the diameter of the tree'
  )

  t.end()
})
