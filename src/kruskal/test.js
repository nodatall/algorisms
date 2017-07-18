import test from '../../testSetup.js'
import kruskal from './'

test('kruskal()', t => {
  const adjcencyList = [
    [],
    [{node: 2, weight: 3}, {node: 5, weight: 5}],
    [{node: 1, weight: 3}, {node: 3, weight: 5}, {node: 5, weight: 6}],
    [{node: 2, weight: 5}, {node: 4, weight: 9}, {node: 6, weight: 3}],
    [{node: 3, weight: 9}, {node: 6, weight: 7}],
    [{node: 1, weight: 5}, {node: 2, weight: 6}, {node: 6, weight: 2}],
    [{node: 3, weight: 3}, {node: 4, weight: 7}, {node: 5, weight: 2}]
  ]

  const minSpanningTree = [
    [],
    [{node: 2, weight: 3}, {node: 5, weight: 5}],
    [{node: 1, weight: 3}],
    [{node: 6, weight: 3}],
    [{node: 6, weight: 7}],
    [{node: 6, weight: 2}, {node: 1, weight: 5}],
    [{node: 5, weight: 2}, {node: 3, weight: 3}, {node: 4, weight: 7}]
  ]

  t.deepEqual(
    kruskal(adjcencyList),
    minSpanningTree,
    'returns minimum spanning tree'
  )

  t.end()
})
