export default ( ...args ) => {
  const argsArr = [...args]

  return argsArr.reduce( ( acc, cur, curIndex ) => {
    if ( curIndex === 0 ) return cur
    return [
      ...cur.filter( elem => !acc.includes( elem )),
      ...acc.filter( elem => !cur.includes( elem ))
    ]
  })
}
