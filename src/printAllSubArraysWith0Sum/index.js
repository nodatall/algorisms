const findSets = (num, array) => {
  if ( num === 1 ) {
    return array.map( (value, index) => {
      return [{ index, value }]
    })
  }
  let result = []
  findSets(num - 1, array).forEach( set => {
    const index = set[set.length - 1].index

    for ( let i = index + 1; i < array.length; i++ ) {
      result.push(set.concat({
        index: i,
        value: array[i]
      }))
    }
  })
  return result
}

const isAlreadyIn = (set, setBunch) =>
  setBunch.reduce( (acc, compareSet) => {
    if ( acc ) {
      return true
    }
    if ( compareSet.length !== set.length ) {
      return acc
    }
    for ( let i = 0; i < compareSet.length; i++ ) {
      if ( compareSet[i] !== set[i] ) {
        return false
      }
    }
    return true
  }, false)

export default array => {
  let allTheSets = []

  for ( let i = 1; i <= array.length; i++ ) {
    allTheSets = [...findSets(i, array), ...allTheSets]
  }

  const result = allTheSets.reduce( (acc, set) => {
    const setInfo = set.reduce( (setAcc, numberObject) => {
      setAcc.sum += numberObject.value
      setAcc.set.push( numberObject.value )
      return setAcc
    }, {sum: 0, set: []})
    if ( setInfo.sum === 0 ) {
      if ( isAlreadyIn(setInfo.set, acc ) ) {
        return acc
      }
      return [...acc, setInfo.set]
    } else {
      return acc
    }
  },[])

  return result
}
