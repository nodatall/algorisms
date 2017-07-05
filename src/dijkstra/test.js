import test from '../../testSetup.js'
import dijkstra from './'

test('dijkstra()', t => {
  const adjcencyList = [
    [{index: 1, distance: 5},{index: 3, distance: 9},{index: 4, distance: 1}],
    [{index: 0, distance: 5},{index: 2, distance: 2}],
    [{index: 1, distance: 2},{index: 3, distance: 6}],
    [{index: 0, distance: 9},{index: 4, distance: 2},{index: 2, distance: 6}],
    [{index: 3, distance: 2},{index: 0, distance: 1}]
  ]

  t.deepEqual(
    dijkstra(adjcencyList, 0),
    [0, 5, 7, 3, 1],
    'returns smallest distances to all nodes from given node'
  )

  t.end()
})
