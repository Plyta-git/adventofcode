import {day3 as data} from './data.js';

let sum = 0;
const dataArray = data.split('\n')
for (let i = 0; i < dataArray.length; i += 3){
    let priority = 0;

    const tmpType = dataArray[i].split('').filter(e => dataArray[i+1].split('').includes(e));
    const type = dataArray[i+2].split('').filter(e => tmpType.includes(e))[0];

    if(type === type.toLowerCase())
    priority = type.charCodeAt(0)-96
    else
    priority = type.charCodeAt(0)-38

    sum += priority;
}
console.log(sum)