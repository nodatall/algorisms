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
    mergeSort( arr.slice( 0, pivot) ),
    mergeSort( arr.slice( pivot ) )
  )
}

const binarySearch = ( arr, num ) => {
  let right = arr.length
  let left = 0
  let middle = Math.floor( ( right + left ) / 2 )

  while ( arr[middle] !== num ) {
    if ( arr[middle] > num ) {
      right = middle
      middle = Math.floor( ( right + left ) / 2 )
    } else if ( arr[middle] < num ) {
      left = middle
      middle = Math.floor( ( right + left ) / 2 )
    }

    if ( right - left === 1 ) {
      return null
    }
  }

  return middle
}

export default ( arr, targetValue ) => {
  arr = mergeSort( arr )
  const results = []
  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = 0; j < arr.length; j++ ) {
      const desired = targetValue - arr[i] - arr[j]
      if ( desired > 0 ) {
        const searchResult = binarySearch( arr, desired )
        if ( searchResult ) {
          results.push( arr[searchResult], arr[i], arr[j] )
          return results
        }
      }
    }
  }
}
