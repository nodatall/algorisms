import test from '../../testSetup.js'
import breadthFirstSearch from './'

test('breadthFirstSearch()', t => {
  const adjcencyList = [
    [2,4],
    [3,5,1],
    [6,2],
    [1],
    [6,2],
    [3,5]
  ]

  t.deepEqual(
    breadthFirstSearch(adjcencyList, 0),
    [0, 1, 2, 1, 2, 3],
    'returns distances to all nodes from given node'
  )

  t.end()
})
