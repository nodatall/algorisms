import test from '../../testSetup.js'
import quickSort from './'

test('quickSort()', t => {
  const arr = [5, 3, 1, 2, 6, 8]

  t.deepEqual(
    quickSort(arr),
    [1, 2, 3, 5, 6, 8],
    'returns the sorted array'
  )

  t.end()
})
