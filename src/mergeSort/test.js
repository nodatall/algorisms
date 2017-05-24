import test from '../../testSetup.js'
import mergeSort, { sortSets, recursiveMergeSort } from './'

test('sortSets()', t => {
  const arr1 = [3, 27, 35, 43],
    arr2 = [9, 10, 82]

  t.deepEqual(
    sortSets(arr1, arr2),
    [3, 9, 10, 27, 35, 43, 82],
    'returns a single sorted array'
  )

  t.end()
})

test('mergeSort()', t => {
  const arr = [5, 3, 1, 2, 6, 8]

  t.deepEqual(
    mergeSort(arr),
    [1, 2, 3, 5, 6, 8],
    'returns the sorted array'
  )

  t.end()
})

test('recursiveMergeSort()', t => {
  const arr = [5, 3, 1, 2, 6, 8, 4, 5, 6, 7, 7, 8, 8, 5, 6, 5, 5, 1, 2, 3, 4, 5, 6, 7, 5, 3, 1, 2, 6, 8, 4, 5, 6, 7, 7, 8, 8, 5, 6, 5, 5, 1, 2, 3, 4, 5, 6, 7, 5, 3, 1, 2, 6, 8, 4, 5, 6, 7, 7, 8, 8, 5, 6, 5, 5, 1, 2, 3, 4, 5, 6, 7, 5, 3, 1, 2, 6, 8, 4, 5, 6, 7, 7, 8, 8, 5, 6, 5, 5, 1, 2, 3, 4, 5, 6, 7, 5, 3, 1, 2, 6, 8, 4, 5, 6, 7, 7, 8, 8, 5, 6, 5, 5, 1, 2, 3, 4, 5, 6, 7, 5, 3, 1, 2, 6, 8, 4, 5, 6, 7, 7, 8, 8, 5, 6, 5, 5, 1, 2, 3, 4, 5, 6, 7, 5, 3, 1, 2, 6, 8, 4, 5, 6, 7, 7, 8, 8, 5, 6, 5, 5, 1, 2, 3, 4, 5, 6, 7, 5, 3, 1, 2, 6, 8, 4, 5, 6, 7, 7, 8, 8, 5, 6, 5, 5, 1, 2, 3, 4, 5, 6, 7, 5, 3, 1, 2, 6, 8, 4, 5, 6, 7, 7, 8, 8, 5, 6, 5, 5, 1, 2, 3, 4, 5, 6, 7, 5, 3, 1, 2, 6, 8, 4, 5, 6, 7, 7, 8, 8, 5, 6, 5, 5, 1, 2, 3, 4, 5, 6, 7]
  console.time('Recursive Merge Sort')
  recursiveMergeSort(arr)
  console.timeEnd('Recursive Merge Sort')
  console.time('Slow Lame Merge Sort')
  mergeSort(arr)
  console.timeEnd('Slow Lame Merge Sort')

  t.end()
})
