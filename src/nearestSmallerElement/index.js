export default ( arr, index ) => {
  const stack = [arr[0]]
  for ( let i = 0; i <= index; i++ ) {
    while ( arr[stack[stack.length - 1]] >= arr[i] && stack.length !== 0 ) {
      stack.pop()
    }
    stack.push( i )
  }
  if ( stack.length === 1 ) {
    return null
  } else {
    return stack[stack.length - 2]
  }
}
