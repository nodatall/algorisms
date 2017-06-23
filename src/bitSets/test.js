import test from '../../testSetup.js'
import { genBinarySet, binarySetToArray } from './'

test('genBinarySet', t => {

  const arr = [1,3,4,8]

  t.deepEqual(
    genBinarySet(arr),
    282,
    'returns a binary set from the given array'
  )

  t.end()
})

test('binarySetToArray', t => {

  const arr = [1,3,4,8]

  t.deepEqual(
    binarySetToArray(282),
    arr,
    'returns an array from a given binary set'
  )

  t.end()
})

test('binary set union', t => {

  const arr1 = [1,3,4,8],
    arr2 = [3,6,8,9],
    unionArr = [1,3,4,6,8,9]

  t.deepEqual(
    genBinarySet(arr1) | genBinarySet(arr2),
    genBinarySet(unionArr),
    'union works as expected'
  )

  t.end()
})
