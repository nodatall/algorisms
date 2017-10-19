const euclidsAlgorithm = ( num1, num2 ) => {
  let remainder = num1 % num2
  while ( remainder !== 0 ) {
    num1 = num2
    num2 = remainder
    remainder = num1 % num2
  }
  
  return num2
}

export default euclidsAlgorithm