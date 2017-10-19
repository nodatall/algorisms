import test from '../../testSetup.js'
import euclidsAlgorithm from './'

test('euclidsAlgorithm()', t => {
  t.equal(
    euclidsAlgorithm(15, 10),
    5,
    'returns the greatest common divisor'
  )
  
  t.equal(
    euclidsAlgorithm(15, 9),
    3,
    'returns the greatest common divisor'
  )
  
  t.equal(
    euclidsAlgorithm(15, 8),
    1,
    'returns the greatest common divisor'
  )

  t.end()
})
