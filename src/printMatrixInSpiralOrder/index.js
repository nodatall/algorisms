const reverse = inputArray => inputArray.slice().reverse()

const printMatrixInSpiralOrder = matrix => {
  const width = matrix[0].length,
    height = matrix.length

  if (height === 1) {
    return matrix[0]
  } else if (width === 1) {
    return matrix.map(array => array[0])
  }

  const shorterMatrix = matrix.slice(1, -1)

  return matrix[0]
    .concat(
      shorterMatrix.map(arr => arr[arr.length - 1]),
      reverse(matrix[matrix.length - 1]),
      reverse(shorterMatrix).map(arr => arr[0]),
      printMatrixInSpiralOrder(shorterMatrix.map(arr => arr.slice(1, -1)))
    )
}

export default printMatrixInSpiralOrder
