const quickSort = arr => {
  if ( arr.length <= 1 ) return arr

  const pivot = arr[arr.length - 1],
    right = [],
    left = []

  arr.slice(0, -1).forEach( num => {
    if ( num > pivot ) right.push(num)
    else left.push(num)
  })

  return [...quickSort(left), pivot, ...quickSort(right)]
}

export default quickSort

// Time complexity: O(n log n)
