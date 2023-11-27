function twoSum(nums: number[], target: number): number[] {
  // take the first number and check it against all numbers
  // return first result that matches

  for (let i = 0; i < nums.length; i++) {
    const primaryNumber = nums[i];

    for (let x = 0; x < nums.length; x++) {
        if(i === x) {
            // skip counting primaryNumber against itself
            continue
        }

        const secondaryNumber = nums[x]

        if(primaryNumber + secondaryNumber === target) {
            return [i,x]
        }
    }
  }
}

console.log("Result", twoSum([3,2,4], 6));
