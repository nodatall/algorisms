import test from '../../testSetup.js'
import { fewestCoins, memoizedCoins, loopingCoins, generateAllValues, getNumOfSolutions } from './'

test('fewestCoins()', t => {

  const coins = [1,3,4]

  console.time('fewestCoins')
  const fewestCoinsResult = fewestCoins( coins, 10 )
  console.timeEnd('fewestCoins')

  console.time('memoizedfewestCoins')
  const memoizedfewestCoinsResult = memoizedCoins( coins, 10 )
  console.timeEnd('memoizedfewestCoins')

  console.time('loopCoins')
  const loopCoinsResult = loopingCoins( coins, 10 )
  console.timeEnd('loopCoins')

  t.equal(
    fewestCoinsResult,
    3,
    'returns fewest numbers required whos sum equals the given number'
  )

  t.equal(
    memoizedfewestCoinsResult,
    3,
    'returns fewest numbers required whos sum equals the given number with memoization'
  )

  t.deepEqual(
    generateAllValues( coins, 10 ),
    [ 0, 1, 2, 1, 1, 2, 2, 2, 2, 3, 3 ],
    'returns an array of the smallest number of coins for each number up to the sum'
  )

  t.deepEqual(
    loopCoinsResult,
    [3,3,4],
    'returns fewest numbers required whos sum equals the given number using loops'
  )

  t.deepEqual(
    getNumOfSolutions( coins, 5 ),
    [1,1,1,2,4,6],
    'returns an array of the number of possible ways to get the sum for all sums up to the sum'
  )

  t.end()
})
