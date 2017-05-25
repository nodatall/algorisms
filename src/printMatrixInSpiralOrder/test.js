import test from '../../testSetup.js'
import printMatrixInSpiralOrder from './'

test('printMatrixInSpiralOrder()', t => {
  let matrix = [
    [  1,  2,  3,  4, 5 ],
    [ 16, 17, 18, 19, 6 ],
    [ 15, 24, 25, 20, 7 ],
    [ 14, 23, 22, 21, 8 ],
    [ 13, 12, 11, 10, 9 ]
  ]

  t.true(
    Array.isArray(printMatrixInSpiralOrder(matrix)),
    'returns an array'
  )

  t.deepEqual(
    printMatrixInSpiralOrder(matrix),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    'returns the correct result'
  )

  t.end()
})
