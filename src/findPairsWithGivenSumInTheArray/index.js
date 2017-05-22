export default (arr, sum) => arr.reduce(
  (indicesPairs, currentNumber, currentIndex) => (
    [...indicesPairs, ...arr.reduce(
      (currentNumberPairs, otherNumber, otherIndex) => {
        if (currentIndex < otherIndex && currentNumber + otherNumber === sum)
          return [...currentNumberPairs, [currentIndex, otherIndex]]
        else return currentNumberPairs
      }, [])]
  ), [])
