const findSmallest = (array: number[]):number => {
    let smallest = Infinity;
    let smallestIndex:number = 0;
    for( let i = 0; i < array.length; i ++){
        if( array[i] < smallest) {
            smallest = array[i];
            smallestIndex = i;
        }
    }
    return smallestIndex
}

const selectionSort = (numbers: number[]):number[] => {
    const numbersCopy = numbers.slice();
    const sortedNumbers: number[] = [];
    for (let i = 0 ; i < numbers.length; i++){
        const smallestIndex = findSmallest(numbersCopy);

        sortedNumbers.push(numbersCopy[smallestIndex])
        numbersCopy.splice(smallestIndex,1);
    }
    return sortedNumbers;
}

console.log(selectionSort([3,8,2,1,-98,0]))
