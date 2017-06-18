import test from '../../testSetup.js'
import genDifferenceArray, { updateRangeDiffArr } from './'

test( 'genDifferenceArray', t => {

  const arr = [3,3,1,1,1,5,2,2]

  t.deepEqual(
    genDifferenceArray(arr),
    [3,0,-2,0,0,4,-3,0],
    'returns a difference array from a given array'
  )

  t.end()
})

test( 'updateRangeDiffArr', t => {

  const diffArr = [3,0,-2,0,0,4,-3,0]

  t.deepEqual(
    updateRangeDiffArr(diffArr, 0, 2, 6),
    [9,0,-2,-6,0,4,-3,0],
    'updates a difference array given a range and an increaser'
  )

  t.end()
})
