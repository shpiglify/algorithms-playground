import numsSorted1000  from '../data/thousand-nums-sorted.json';
import numsSorted10000  from '../data/ten-thousand-nums-sorted.json';
import measureRunningTime  from '../lib/measureRunningTime';

type Index = number;
const simpleSearch = (array:number[],item:number):Index => {
    for(let i = 0; i< array.length; i++){
        if (array[i] === item) return i;
    }
    return -1
}

measureRunningTime(simpleSearch,numsSorted1000,82496)
