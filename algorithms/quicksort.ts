#! /usr/bin/env ts-node
const quicksort = (nums: number[]) :number[] => {
    if(nums.length < 2) return nums;
    const pivot = nums[0];
    const less = nums.filter(num => num < pivot);
    const greater = nums.filter(num => num > pivot);
    return [...quicksort(less) , pivot , ...quicksort(greater)];
}

console.log(quicksort([3,53,34,2,-98,234]));
