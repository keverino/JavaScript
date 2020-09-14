/*
Given: 

n = 6
denoms = [1, 5]

expected: 2 // two ways of getting 6, 1x1 + 1x5, and 6x1
*/

change = (denoms, amount) => {
  if (amount < 0 || denoms == null || denoms.length == 0)
    return amount == 0 ? 1 : 0;

  let dp = new Array(2);

  for (let i = 0; i < denoms.length + 1; i++) {
    dp[i] = new Array(2);
  }

  // if you have no coins, then you have 0 ways to make change
  for (var i = 0; i < amount + 1; i++) {
    dp[0][i] = 0;
  }

  // set first column to all 1's because you can always make the amount 0 with 0 coins
  for (var i = 0; i < denoms.length + 1; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < denoms.length + 1; i++) {
    dp[i][0] = 1;

    for (let j = 1; j < amount + 1; j++) {
      dp[i][j] = dp[i - 1][j];

      if (j - denoms[i - 1] >= 0) {
        dp[i][j] += dp[i][j - denoms[i - 1]];
      }
    }
  }

  console.table(dp);

  return dp[denoms.length][amount];
};

console.log(change([1, 2, 5], 5));
console.log(change([1, 5], 6));
