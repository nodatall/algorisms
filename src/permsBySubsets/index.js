export default num => {
  const numberOfPermutations = new Array(1 << num).fill(0).map(_ => new Array(num).fill(0))
  for ( let i = 0; i < num; i++ ) numberOfPermutations[1<<i][i] = 1
  for ( let subset = 0; subset < (1 << num); subset++ ) {
    for ( let last = 0; last < num; last++ ) {
      for ( let secondToLast = 0; secondToLast < num; secondToLast++ ) {
        if ( Math.abs( last - secondToLast) > 1 && (subset&(1<<last)) && (subset&(1<<secondToLast))) {
          numberOfPermutations[subset][last] += numberOfPermutations[subset^(1<<last)][secondToLast]
        }
      }
    }
  }
  let count = 0
  for ( let index = 0; index < num; index++ ) {
    count += numberOfPermutations[(1<<num) - 1][index]
  }
  return count
}
