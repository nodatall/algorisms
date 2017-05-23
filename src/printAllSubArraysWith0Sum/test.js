import test from '../../testSetup.js'
import printAllSubArraysWith0Sub from './'

test('printAllSubArraysWith0Sub()', t => {
  let arr = [-3, -1, 2]

  t.true(
    Array.isArray(printAllSubArraysWith0Sub(arr)),
    'returns an array'
  )

  t.deepEqual(
    printAllSubArraysWith0Sub(arr),
    [],
    'returns an empty array is no subsets with sum 0'
  )

  arr = [4, 2, -3, -1, 0, 4]

  t.deepEqual(
    printAllSubArraysWith0Sub(arr),
    [[-3, -1, 0, 4], [0], [-3, -1, 4]],
    'returns the correct result'
  )

  arr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]

  t.deepEqual(
    printAllSubArraysWith0Sub(arr),
    [
      [3, 4, -7],
      [4, -7, 3],
      [-7, 3, 1, 3],
      [3, 1, -4],
      [3, 1, 3, 1, -4, -2, -2],
      [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
    ],
    'returns the correct result when there are repeating numbers'
  )

  t.end()
})
