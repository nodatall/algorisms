export default ( arr, size ) => {
  const smallestElements = [],
    windowChain = [{index: 0, value: arr[0]}]

  for ( let i = 1; i < arr.length; i++ ) {
    while (
      windowChain[windowChain.length - 1] !== undefined &&
      windowChain[windowChain.length - 1].value >= arr[i] &&
      windowChain.length !== 0
    ) windowChain.pop()

    windowChain.push({index: i, value: arr[i]})

    if ( i >= size - 1 ) {
      if ( windowChain[0].index === i - size ) windowChain.shift()
      smallestElements.push( windowChain[0].value )
    }
  }

  return smallestElements
}
