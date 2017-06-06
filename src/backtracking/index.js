const backtrack = num => {
  const arr1 = []
  const arr2 = []
  const arr3 = []

  let count = 0

  const searchIt = num2 => {
    if ( num2 === num ) {
      count++
      return
    }

    for ( let i = 0; i < num; i++ ) {
      if ( arr1[i] || arr2[i+num2] || arr3[i-num2+num-1] ) continue
      arr1[i] = arr2[i+num2] = arr3[i-num2+num-1] = 1
      searchIt( num2 + 1 )
      arr1[i] = arr2[i+num2] = arr3[i-num2+num-1] = 0
    }
  }

  searchIt(0)

  return count
}

export default backtrack
