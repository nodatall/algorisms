const editDistance = ( str1, str2, str1Index, str2Index ) => {
  if ( str1Index === 0 ) return str2Index
  if ( str2Index === 0 ) return str1Index

  const lettersMatch = str1[str1Index - 1] === str2[str2Index - 1] ? 0 : 1

  return Math.min(
    editDistance( str1, str2, str1Index, str2Index - 1 ) + 1,
    editDistance( str1, str2, str1Index - 1, str2Index ) + 1,
    editDistance( str1, str2, str1Index - 1, str2Index - 1 ) + lettersMatch
  )
}

export default editDistance
