import test from '../../testSetup.js'
import SPFA from './'

test('SPFA()', t => {
  const adjcencyList = [
    [{node: 2, weight: 2},{node: 4, weight: 7},{node: 3, weight: 3}],
    [{node: 5, weight: 5},{node: 4, weight: 3},{node: 1, weight: 2}],
    [{node: 4, weight: -2},{node: 1, weight: 3}],
    [{node: 3, weight: -2},{node: 1, weight: 7},{node: 2, weight: 3},{node: 5, weight: 2}],
    [{node: 4, weight: 2},{node: 2, weight: 5}]
  ]

  t.deepEqual(
    SPFA(adjcencyList, 0),
    [0,2,3,1,3],
    'returns smallest distances to all nodes from given node'
  )

  t.end()
})
