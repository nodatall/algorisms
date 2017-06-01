// Solution 1
/*
export default arr => {
  const subsets = []
  const subset = []

  const generateSubsetsHelper = number => {
    if ( number === arr.length + 1 ) {
      subsets.push( subset.slice() )
    } else {
      generateSubsetsHelper( number + 1)
      subset.push( number )
      generateSubsetsHelper( number + 1)
      subset.pop()
    }
  }

  generateSubsetsHelper(1)

  return subsets
}
*/

// Solution 2
export default arr => {
  const subsets = []

  for ( let i = 0; i < ( 1 << arr.length ); i++ ) {
    const subset = []
    for ( let j = 0; j < arr.length; j++ ) {
      if ( i & ( 1 << j ) ) subset.push( j + 1 )
    }
    subsets.push( subset )
  }

  return subsets
}
