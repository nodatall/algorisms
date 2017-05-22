import test from '../../testSetup.js'
import findPairsWithGivenSumInTheArray from './'

test('findPairsWithGivenSumInTheArray()', t => {
  let arr = [1, 2],
    sum = 1

  t.true(
    Array.isArray(findPairsWithGivenSumInTheArray(arr, sum)),
    'returns an array'
  )

  t.deepEqual(
    findPairsWithGivenSumInTheArray(arr, sum),
    [],
    'returns an empty array'
  )

  arr = [8, 7, 2, 5, 3, 1]
  sum = 10

  t.deepEqual(
    findPairsWithGivenSumInTheArray(arr, sum),
    [[0, 2], [1, 4]],
    'returns the correct result'
  )

  arr = [1, 1, 1]
  sum = 2

  t.deepEqual(
    findPairsWithGivenSumInTheArray(arr, sum),
    [[0, 1], [0, 2], [1, 2]],
    'returns the correct result when indices appear in multiple pairs'
  )

  t.end()
})
