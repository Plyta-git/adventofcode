import {day2 as data} from './data.js';

const testData = `A Y
B X
C Z`

let totalScore = 0;

const pointsForWin = (p,o) => {
    p = p.charCodeAt(0)-90
    o = o.charCodeAt(0)-64
    switch (o-p) {
        case 5:
        case 2:
            return 6
        case 3:
            return 3
        default:
            return 0
    }
}

const getScore = (inp) =>{
    const [oponent, player] = inp.split(" ");
    const choosePoints = player.charCodeAt(0)-87;
    const winPoints = pointsForWin(player, oponent);
    const points = choosePoints+ winPoints ;
    return points;
}

data.split('\n').forEach((line)=>{
    totalScore += getScore(line)
    console.log(`${line}: ${getScore(line)}`)
})  
console.log(`score: ${totalScore}`)


