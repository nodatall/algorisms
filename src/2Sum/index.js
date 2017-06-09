const merge = ( arr1, arr2 ) => {
  const mergedArr = []

  while ( arr1.length || arr2.length ) {
    if ( arr1[0] < arr2[0] || arr2[0] === undefined ) {
      mergedArr.push( arr1.shift() )
    } else {
      mergedArr.push( arr2.shift() )
    }
  }

  return mergedArr
}

const mergeSort = arr => {
  if ( arr.length === 1 ) return arr

  const pivot = Math.floor( arr.length / 2 )

  return merge(
    mergeSort( arr.slice( 0, pivot ) ),
    mergeSort( arr.slice( pivot ) )
  )
}

export default (arr, targetSum) => {
  arr = mergeSort( arr )

  let left = 0,
    right = arr.length - 1

  while ( arr[left] + arr[right] !== targetSum ) {
    if ( left > right ) {
      return 'Not found'
    }
    if ( arr[left] + arr[right] < targetSum ) {
      left += 1
    } else {
      right -= 1
    }
  }

  return [ arr[left], arr[right] ]
}
