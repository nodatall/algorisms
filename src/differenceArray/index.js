export default arr => arr.map( ( num, index ) => {
  if ( index === 0 ) return num
  return arr[index] - arr[index - 1]
})

const updateRangeDiffArr = ( arr, start, end, increaser ) => {
  arr[start] += increaser
  arr[end + 1] -= increaser
  return arr
}

export { updateRangeDiffArr }
