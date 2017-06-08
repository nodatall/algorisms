const maximization = ( objects, endIndex, maxWeight ) => {
  if ( endIndex === 0 && maxWeight === 0 ) return 0
  if ( endIndex === 0 && maxWeight !== 0 ) return -Infinity

  return Math.max(
    maximization( objects, endIndex - 1, maxWeight ),
    maximization( objects, endIndex - 1, maxWeight - objects[endIndex].weight ) + objects[endIndex].value
  )
}

const minimization = ( objects, endIndex, maxValue ) => {
  if ( endIndex === 0 && maxValue === 0 ) return 0
  if ( endIndex === 0 && maxValue !== 0 ) return Infinity

  return Math.min(
    minimization( objects, endIndex - 1, maxValue ),
    minimization( objects, endIndex - 1, maxValue - objects[endIndex].value ) + objects[endIndex].weight
  )
}

export { maximization, minimization }
