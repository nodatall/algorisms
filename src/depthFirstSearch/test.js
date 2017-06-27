import test from '../../testSetup.js'
import depthFirstSearch, { recursiveDFS } from './'
import Node from './node'

test('depthFirstSearch()', t => {
  const node4 = new Node('four')
  const node5 = new Node('five')
  const node3 = new Node('three', node4, node5)
  const node6 = new Node('six')
  const node2 = new Node('two', node3, node6)
  const node7 = new Node('seven')
  const node10 = new Node('ten')
  const node11 = new Node('eleven')
  const node9 = new Node('nine', node10, node11)
  const node12 = new Node('twelve')
  const node8 = new Node('eight', node9, node12)
  const node1 = new Node('one', node2, node7, node8 )

  t.true(
    depthFirstSearch(node1, 'ten') instanceof Node,
    'returns an Node'
  )

  t.equal(
    depthFirstSearch(node1, 'ten'),
    node10,
    'returns the node with matching value'
  )

  t.end()
})

test('recursiveDFS()', t => {
  const edgeList = [
    [2,4],
    [3,5,1],
    [5,2],
    [1],
    [2,3]
  ]

  t.deepEqual(
    recursiveDFS( edgeList, 1 ),
    [ 0, 1, 2, 4, 3 ],
    'returns search path'
  )

  t.end()
})
