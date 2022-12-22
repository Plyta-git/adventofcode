import {day3 as data} from './data.js';

let sum = 0;

data.split('\n').forEach((line)=>{
    line = line.split('');
    const half = line.length/2
    const firstPart = line.slice(half)
    const secPart = line.slice(0,half);
    let priority = 0;

    const type = firstPart.filter(e => secPart.includes(e))[0];
    if(type === type.toLowerCase())
    priority = type.charCodeAt(0)-96
    else
    priority = type.charCodeAt(0)-38

    sum += priority;
})
console.log(sum)