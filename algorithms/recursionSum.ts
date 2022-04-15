let stepsCounter = 0;
const recursionSum =  (nums: number[]):number => {
    stepsCounter++;
    const numsCopy = nums.slice();
    if(numsCopy.length <= 1) return numsCopy[0];
    const addend = numsCopy.shift();
    return  addend + recursionSum(numsCopy);
}

console.log(recursionSum([2,3,4,78,-2]));
console.log(stepsCounter);