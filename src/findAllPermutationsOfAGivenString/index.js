const findAllPermutationsOfAGivenArray = arr => {
  const result = []
  if ( arr.length === 1 ) return arr

  arr.forEach( (character, index) => {
    const arrayCopy = arr.slice()
    arrayCopy.splice(index, 1)
    findAllPermutationsOfAGivenArray( arrayCopy ).forEach(
      permutation => {
        result.push( character + permutation )
      }
    )
  })
  return result
}
//Solution 2
/*
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr.splice(i, 1, arr[j])
  arr.splice(j, 1, temp)
}

const result = []

const findAllPermutationsOfAGivenArray = (arr, index = 0, length = arr.length) => {
  if ( index === length - 1 ) {
    result.push( arr.slice() )
    return
  }

  for ( let j = index; j < length; j++ ) {
    swap(arr, index, j)
    findAllPermutationsOfAGivenArray(arr, index + 1, length)
    swap(arr, j, index)
  }

  return result
}
*/

export default findAllPermutationsOfAGivenArray
