const genBinarySet = arr => {
  let binarySet = 0
  arr.forEach( num => {
    binarySet |= ( 1 << num )
  })
  return binarySet
}

const binarySetToArray = binarySet => {
  const resultArr = []
  for ( let i = 0; i <= 31; i++ ) {
    if ( binarySet & ( 1 << i ) ) resultArr.push( i )
  }
  return resultArr
}



export { genBinarySet, binarySetToArray }
