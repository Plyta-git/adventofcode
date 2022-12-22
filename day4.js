import {day4 as data} from './data.js';
let sum = 0;
let sumSame = 0

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

data.split('\n').forEach((line)=>{
    line = line.split(",") // ZAPAMIETAC: ZAWSZE ZAMIENIAJ STRING NA NUMBER :) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const range1 = line[0].split("-").map(x=> Number(x))
    const range2 = line[1].split("-").map(x=> Number(x))

    if((range1[0] <= range2[0] && range1[1] >= range2[1]) || (range2[0] <= range1[0] && range2[1] >= range1[1]))
        sum += 1
    if( range(range1[0],range1[1]).some(r=> range(range2[0],range2[1]).indexOf(r) >= 0))
        sumSame +=1;
})  
console.log(`1) ${sum}`)
console.log(`2) ${sumSame}`)

