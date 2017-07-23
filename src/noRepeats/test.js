import test from '../../testSetup.js'
import noRepeats from './'

test('noRepeats()', t => {

  t.equal(
    noRepeats("aab"),
    2,
    'returns number of permutations'
  )

  t.equal(
    noRepeats("aaa"),
    0,
    'returns number of permutations'
  )

  t.equal(
    noRepeats("aabb"),
    8,
    'returns number of permutations'
  )

  t.equal(
    noRepeats("abcdefa"),
    3600,
    'returns number of permutations'
  )

  t.equal(
    noRepeats("abfdefa"),
    2640,
    'returns number of permutations'
  )

  t.equal(
    noRepeats("aaabb"),
    12,
    'returns number of permutations'
  )

  t.end()
})
