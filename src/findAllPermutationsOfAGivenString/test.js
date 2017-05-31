import test from '../../testSetup.js'
import findAllPermutationsOfAGivenArray from './'

test('findAllPermutationsOfAGivenArray()', t => {

  let magicalArray = ['A', 'B', 'C']

  t.equal(
    Array.isArray(findAllPermutationsOfAGivenArray(magicalArray)),
    true,
    'returns an array'
  )

  t.deepEqual(
    findAllPermutationsOfAGivenArray(magicalArray),
    ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA'],
    'returns all permutations of abc'
  )

  t.end()
})
