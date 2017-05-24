export default arr => {
  const visited = {}
  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] in visited ) {
      return arr[i]
    } else {
      visited[arr[i]] = true
    }
  }
  return "No duplicate numbers"
}
