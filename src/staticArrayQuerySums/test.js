import test from '../../testSetup.js'
import { sumOfRange, gen2D, gen2Dloop, genMinRanges, getMinimumOfRange } from './'

test( 'staticArrayQuerySums', t => {
    const arr = [1,3,4,8,6,1,4,2]

    console.time('2d recursive')
    const recursiveResult = gen2D([
      [1,2,3],
      [1,2,3],
      [1,2,3]
    ])
    console.timeEnd('2d recursive')
    console.time('loop result')
    const loopResult = gen2Dloop([
      [1,2,3],
      [1,2,3],
      [1,2,3]
    ])
    console.timeEnd('loop result')

  t.deepEqual(
    sumOfRange(4, 7),
    19,
    'returns the sum of the range'
  )

  t.deepEqual(
    recursiveResult,
    [
      [1,3,6],
      [2,6,12],
      [3,9,18]
    ],
    'returns a 2d prefix sum array'
  )

  t.deepEqual(
    loopResult,
    [
      [1,3,6],
      [2,6,12],
      [3,9,18]
    ],
    'returns a 2d prefix sum array'
  )

  t.deepEqual(
    genMinRanges(arr),
    [
      [ 1, 1, , 1, , , , 1 ],
      [ , 3, 3, , 3 ],
      [ , , 4, 4, , 1 ],
      [ , , , 8, 6, , 1 ],
      [ , , , , 6, 1, , 1 ],
      [ , , , , , 1, 1 ],
      [ , , , , , , 4, 2 ],
      [ , , , , , , , 2 ]
    ],
    'returns a matrix of all minimums for ranges that are powers of 2'
  )

  t.equal(
    getMinimumOfRange(1,6),
    1,
    'gets the minimum number for the given range'

  )

  t.end()
})
