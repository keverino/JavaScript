/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

ex)
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

ex) 
Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]

*/
var twoSum = function (nums, target) {
  let output = [];

  // go through each value in nums
  for (let [index, value] of nums.entries()) {
    /* 
        // for nums [2, 7, 11, 15] and target 9
        
        // 1st iteration
        output[9 - nums[0]] = 0
        output[9 - 2] = 0;
        output[7] = 0;
    
        // 2nd interation
        output[nums[1]] >= 0 false, so
        output[9-nums[1]] = 1;
        output[9-7] = 1;
        output[2] = 1;
        
        // 3rd interation
        output[nums[3]] >= 0 false, so
        output[9-nums[3]] = 3;
        output[9-11] = 3;
        output[-2] = 3
        
        // 4th interation
        output[nums[2]] >= 0 false, so
        output[9-nums[4]] = 4;
        output[9-15] = 4;
        output[-6] = 4;
        
        loop complete.
        only things in array are: [0, 1]
        */

    if (output[nums[index]] >= 0) return [output[nums[index]], index];
    output[target - nums[index]] = index;
  }
};
