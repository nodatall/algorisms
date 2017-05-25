import test from '../../testSetup.js'
import depthFirstSearch from './'
import Node from './node'

test('printMatrixInSpiralOrder()', t => {
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
