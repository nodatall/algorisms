import test from '../../testSetup.js'
import largestPossibleSumOnPath from './'

test('largestPossibleSumOnPath()', t => {
  let arr = [
    [3,7,9,2,7],
    [9,8,3,5,5],
    [1,7,9,8,5],
    [3,8,6,4,10],
    [6,3,9,7,8]
  ]

  t.equal(
    largestPossibleSumOnPath(arr, 4,4),
    67,
    'returns the sum of the largest possble sum on a path to the given end coordinates'
  )

  t.equal(
    largestPossibleSumOnPath(arr, 0,0),
    3,
    'returns the sum of the largest possble sum on a path to the given end coordinates'
  )

  t.equal(
    largestPossibleSumOnPath(arr, 1,1),
    20,
    'returns the sum of the largest possble sum on a path to the given end coordinates'
  )

  t.equal(
    largestPossibleSumOnPath(arr, 0,4),
    28,
    'returns the sum of the largest possble sum on a path to the given end coordinates'
  )

  t.end()
})
