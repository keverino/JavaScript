// https://codeburst.io/fibonacci-staircase-4f1e8e47e392

/*
There’s a staircase with N steps, and you can climb 1 or 2 steps at a time.

Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:
*/


function numberOfSteps(n){
  if( n == 0 || n == 1) return 1;
  else return numberOfSteps(n-1) + numberOfSteps(n-2);
}

var numberOfWays = numberOfSteps(4);
console.log(numberOfWays);
