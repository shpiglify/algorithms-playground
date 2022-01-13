type Index = number;
const binarySearch = (sortedArray:number[], item: number): Index => {
    let bottom: Index = 0;
    let top: Index = sortedArray.length -1;

    while(bottom <= top ){
        let guess : Index = Math.floor( (bottom + top) / 2);
        const currentItem = sortedArray[guess]
        if(currentItem === item) return guess
        if(item < currentItem){
            top = guess -1
        } else{
            bottom = guess + 1
        }
    }
    return -1
}

const nums = [1,2,6,33,56,97,203]
console.log(binarySearch(nums, 97))