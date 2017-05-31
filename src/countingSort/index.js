export default arr => {
  const countArr = []
  const sortedArr = []

  arr.forEach( number => {
    countArr[number] ? countArr[number] += 1 : countArr[number] = 1
  })

  countArr.forEach( (count, index) => {
    if ( count ) {
      while ( count-- > 0 ) {
        sortedArr.push( index )
      }
    }
  })
  
  return sortedArr
}
