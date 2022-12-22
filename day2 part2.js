import {day2 as data} from './data.js';

const testData = `A Y
B X
C Z`

const resOp = {
    A:{
        win: "Y",
        draw: "X",
        lose: "Z"
    },
    B:{
        win: "Z",
        draw: "Y",
        lose: "X"
    },
    C:{
        win: "X",
        draw: "Z",
        lose: "Y"
    }
}

let totalScore = 0;

const pointsForWin = (p,o) => {
    switch (p) {
        case "X":
            return([0, resOp[o].lose.charCodeAt(0)-87])
        case "Y":
            return([3, resOp[o].draw.charCodeAt(0)-87])
        default:            
            return([6, resOp[o].win.charCodeAt(0)-87])
    }
}

const getScore = (inp) =>{
    const [oponent, player] = inp.split(" ");
    const [winPoints, choosePoints] = pointsForWin(player, oponent);
    const points = choosePoints + winPoints ;
    return points;
}

data.split('\n').forEach((line)=>{
    totalScore += getScore(line)
    console.log(`${line}: ${getScore(line)}`)
})  
console.log(`score: ${totalScore}`)


