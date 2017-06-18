import test from '../../testSetup.js'
import { genSumSegTree, genMaxSegTree, genMinSegTree, updateSegTree, sumRangeSegTree } from './'

test( 'genSumSegTree', t => {

  const arr = [5,8,6,3,2,7,2,6]

  t.deepEqual(
    genSumSegTree(arr),
    [39,22,17,13,9,9,8,5,8,6,3,2,7,2,6],
    'returns a segment sum tree from the given array'
  )

  t.end()
})

test( 'genMaxSegTree', t => {

  const arr = [5,8,6,3,2,7,2,6]

  t.deepEqual(
    genMaxSegTree(arr),
    [8,8,7,8,6,7,6,5,8,6,3,2,7,2,6],
    'returns a segment max tree from the given array'
  )

  t.end()
})

test( 'genMinSegTree', t => {

  const arr = [5,8,6,3,2,7,2,6]

  t.deepEqual(
    genMinSegTree(arr),
    [2,3,2,5,3,2,2,5,8,6,3,2,7,2,6],
    'returns a segment min tree from the given array'
  )

  t.end()
})

test( 'updateSegTree', t => {

  const segTree = [39,22,17,13,9,9,8,5,8,6,3,2,7,2,6]

  t.deepEqual(
    updateSegTree(segTree, 0, 5),
    [44,27,17,18,9,9,8,10,8,6,3,2,7,2,6],
    'returns a segment tree with an element increase by a number'
  )

  t.end()
})

test( 'sumRangeSegTree', t => {

  const segTree = [39,22,17,13,9,9,8,5,8,6,3,2,7,2,6]

  t.equal(
    sumRangeSegTree(segTree, 2, 6),
    26,
    'returns the sum of the given range in the seg tree'
  )

  t.end()
})
