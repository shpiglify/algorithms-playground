const fs = require('fs');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const generateNumsSortedArray = (length) => {
    const nums = []

    for(let i =0; i< length; i++){
        nums.push(getRandomInt(1,99999))
    }
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    return nums
}


fs.writeFile("1000-nums-sorted.json", JSON.stringify(generateNumsSortedArray(nums)), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 