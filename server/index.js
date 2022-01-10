const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Nirjal');
})

app.get('/scramble', (req, res) => {
    console.log("in scramble")
    const moves = ['L', 'R', 'D', 'U', 'B', 'F']
    const threeScramble = [' ', '2', '`'];
    let scramble = "";
    // let move1 = threeScramble[Math.random() * 6]
    let move2;
    let m1;
    let minmoves = 16;
    let maxmoves = 21;
    // let scramble_len = minmoves + Math.random() * (maxmoves - minmoves);
    for (let i = 0; i < scramble_len; i++) {
        move2 = moves[Math.random() * moves.length];
        if (move1 === move2) {
            i--;
        }
        else {
            m1 = threeScramble[Math.random() * threeScramble.length];
            scramble += move2 + m1;
            move1 = move2;
        }
    }
    res.send(scramble);
})

app.listen(5000, () => {
    console.log("Running in server 5000");
})