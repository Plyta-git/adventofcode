import {day1 as data} from './data.js';

const sum = []
let top3 = [0,0,0]
let currentElf = 0; 


data.split('\n').forEach((line)=>{
    if(line) currentElf += Number(line)
    else{
        sum.push(currentElf)
        if(currentElf > top3[0]){
            top3[0] = currentElf;
            top3.sort();
        }
        currentElf = 0;
    }
})  

console.log(`1) ${Math.max(...sum)}`)
console.log(`2) [${top3}]: ${top3.reduce((a,c)=> a+c,0)}`)
