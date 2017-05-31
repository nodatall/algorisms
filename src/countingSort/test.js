import test from '../../testSetup.js'
import bubbleSort from './'

test('bubbleSort()', t => {
  let arr = [1,3,8,2,9,2,5,6]

  t.deepEqual(
    bubbleSort(arr),
    [1,2,2,3,5,6,8,9],
    'returns the correct result'
  )

  t.end()
})
