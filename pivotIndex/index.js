function pivotIndex(nums) {
    let sumLeft = 0;
    let sumRight = 0;
    // let index = -1;
    for(let i = 0; i < nums.length; i++) {
            sumLeft = sumLeft + nums[i];
    }
    for (let i = nums.length - 1; i > 0; i--) {
            sumLeft = sumLeft - nums[i];
        if (sumLeft === sumRight) {
            return i;
        } 
        sumRight = sumRight + nums[i];
    }
    return -1;
}

console.log(pivotIndex([1,7,3,6,5,6]))