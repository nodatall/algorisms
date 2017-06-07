const minimum = ( val1, val2 ) => val1 > val2 ? val2 : val1

const fewestCoins = ( coins, total ) => {
  let numOfCoins = Infinity

  if ( total < 0 ) return Infinity
  if ( total === 0 ) return 0

  for ( let i = 0; i < coins.length; i++ ) {
    const totalMinusCurrentCoin = total - coins[i]
    numOfCoins = minimum( numOfCoins, fewestCoins( coins, totalMinusCurrentCoin ) + 1 )
  }

  return numOfCoins
}

const coinMemo = []

const memoizedCoins = ( coins, total ) => {
  let numOfCoins = Infinity

  if ( total < 0 ) return Infinity
  if ( total === 0 ) return 0
  if ( coinMemo[total] ) return coinMemo[total]

  for ( let i = 0; i < coins.length; i++ ) {
    numOfCoins = minimum( numOfCoins, fewestCoins( coins, total - coins[i] ) + 1 )
  }

  coinMemo[total] = numOfCoins
  return coinMemo[total]
}

const generateAllValues = ( coins, sum ) => {
  const allValues = []
  allValues[0] = 0

  for ( let currentSum = 1; currentSum <= sum; currentSum++ ) {
    let numOfCoins = Infinity
    for ( let coinIndex = 0; coinIndex < coins.length; coinIndex++ ) {
      if ( currentSum - coins[coinIndex] < 0 ) continue
      numOfCoins = minimum( numOfCoins, allValues[currentSum - coins[coinIndex]] + 1 )
    }
    allValues[currentSum] = numOfCoins
  }

  return allValues
}

const loopingCoins = ( coins, sum ) => {
  const allValues = []
  const firstCoins = []
  const coinsResult = []
  allValues[0] = 0

  for ( let currentSum = 1; currentSum <= sum; currentSum++ ) {
    allValues[currentSum] = Infinity
    for ( let coinIndex = 0; coinIndex < coins.length; coinIndex++ ) {
      if ( currentSum - coins[coinIndex] < 0 ) continue

      const currentSumMinusCurrentCoin = currentSum - coins[coinIndex]
      const numOfCoins = allValues[currentSumMinusCurrentCoin] + 1

      if ( numOfCoins < allValues[currentSum] ) {
        allValues[currentSum] = numOfCoins
        firstCoins[currentSum] = coins[coinIndex]
      }
    }
  }

  while ( sum > 0 ) {
    coinsResult.push( firstCoins[sum] )
    sum -= firstCoins[sum]
  }

  return coinsResult
}

const getNumOfSolutions = ( coins, sum ) => {
  const allNumbersOfSolutions = []
  allNumbersOfSolutions[0] = 1

  for ( let currentSum = 1; currentSum <= sum; currentSum++ ) {
    allNumbersOfSolutions[currentSum] = 0
    for ( let coinIndex = 0; coinIndex < coins.length; coinIndex++ ) {
      const remainingSumAfterSubtractingCurrentCoinFromCurrentSum = currentSum - coins[coinIndex]
      if ( remainingSumAfterSubtractingCurrentCoinFromCurrentSum < 0 ) continue
      allNumbersOfSolutions[currentSum] += allNumbersOfSolutions[remainingSumAfterSubtractingCurrentCoinFromCurrentSum]
    }
  }

  return allNumbersOfSolutions
}

export { memoizedCoins, fewestCoins, loopingCoins, generateAllValues, getNumOfSolutions }
