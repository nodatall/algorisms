const solutionMemo = []

const lengthOfLongestIncreasingSubsequence = ( arr, endIndex ) => {
  if ( solutionMemo[endIndex] ) return solutionMemo[endIndex]
  if ( endIndex === 0 ) return 1

  let bestSolution = 0

  for ( let i = 0; i < endIndex; i++ ) {
    if ( arr[i] < arr[endIndex] ) {
      bestSolution = Math.max( lengthOfLongestIncreasingSubsequence( arr, i ), bestSolution )
    }
  }

  solutionMemo[endIndex] = bestSolution + 1
  return solutionMemo[endIndex]
}

const loopVersion = ( arr, maximumEndIndex ) => {
  const allSolutionsUpToEndIndex = [1]

  for ( let curEndIndex = 1; curEndIndex <= maximumEndIndex; curEndIndex++ ) {
    let bestSolution = 0
    for ( let index = 0; index < curEndIndex; index++ ) {
      if ( arr[index] < arr[curEndIndex] ) {
        bestSolution = Math.max( allSolutionsUpToEndIndex[index], bestSolution )
      }
    }
    allSolutionsUpToEndIndex[curEndIndex] = bestSolution + 1
  }

  return allSolutionsUpToEndIndex
}

export {
  lengthOfLongestIncreasingSubsequence,
  loopVersion
}
