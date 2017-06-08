import test from '../../testSetup.js'
import { maximization, minimization } from './'

test('knapsack()', t => {
  let objectsArr = [
    { weight: 5, value: 1 },
    { weight: 6, value: 3 },
    { weight: 8, value: 5 },
    { weight: 5, value: 3 }
  ]

  t.equal(
    maximization(objectsArr, 3, 11),
    6,
    'returns the largest value of the subset range without exceeding the given weight'
  )

  t.equal(
    minimization(objectsArr, 3, 6),
    11,
    'returns the smallest weight of a subset whos value matches the given value'
  )

  t.end()
})
