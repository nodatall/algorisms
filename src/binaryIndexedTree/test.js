import test from '../../testSetup.js'
import createBinaryIndexedTree from './'

test( 'createBinaryIndexedTree', t => {

  const arr = [1,3,4,8,6,1,4,2]

  t.deepEqual(
    createBinaryIndexedTree(arr),
    [1,4,4,16,6,7,4,29],
    'returns a binary indexed tree from the given array'
  )

  t.end()
})
