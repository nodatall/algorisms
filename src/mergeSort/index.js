export const sortSets = ( arr1, arr2 ) => {
  let result = []

  while ( arr1.length || arr2.length ) {
    if ( arr1[0] < arr2[0] || arr2[0] === undefined ) {
      result.push( arr1.shift() )
    } else {
      result.push( arr2.shift() )
    }
  }

  return result
}

//Non-standard solution
export default arr => {
  let subArrayLength = 1
  let subArrayLengthEnd = Math.pow( 2, Math.log2( arr.length ) + 2 )
  while ( subArrayLength <= subArrayLengthEnd / 2 ) {
    arr = arr.reduce( (acc, set, index) => {
      if ( !Array.isArray(set) ) {
        set = [set]
      }
      if ( index % 2 === 0 && index !== arr.length - 1 ) {
        acc.tempSet = set
      } else {
        acc.newSets.push( sortSets(acc.tempSet, set) )
      }
      return acc
    }, { newSets: [], tempSet: []}).newSets
    subArrayLength *= 2
  }
  return arr[0]
}

//Recursive Solution
const recursiveMergeSort = arr => {
  if ( arr.length === 1 ) {
    return arr
  }
  const pivot = Math.ceil(arr.length / 2)

  return sortSets(recursiveMergeSort(arr.slice(0, pivot)), recursiveMergeSort(arr.slice(pivot)))
}

export { recursiveMergeSort }
