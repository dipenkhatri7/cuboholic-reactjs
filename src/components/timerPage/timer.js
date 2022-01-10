import './timer.css'
import Scramble from '../timerPage/scramble_img.png'
import { useState } from 'react';
export default function Timer() {
  const [scrambles, setScramble] = useState();
  function makeScramble() {
    var options = ["F", "F2", "F'", "R", "R2", "R'", "U", "U2", "U'", "B", "B2", "B'", "L", "L2", "L'", "D", "D2", "D'"]
    var numOptions = [0, 1, 2, 3, 4, 5] 
    var scramble = []
    var scrambleMoves = []
    var bad = true

    while (bad) {
        scramble = []
        for (var i = 0; i < 20; i++) {
            scramble.push(numOptions[getRandomInt(6)])
        }

        for (var i = 0; i < 20 - 1; i++) {
            if (scramble[i] == scramble[i + 1]) {
                bad = true
                break
            } else {
                bad = false
            }
        }
    }
    var move;
    for (var i = 0; i < 20; i++) {
        switch (scramble[i]) {
            case 0:
                move = options[getRandomInt(3)] // 0,1,2
                scrambleMoves.push(move)
                break
            case 1:
                move = options[getRandomIntBetween(3, 6)] // 3,4,5
                scrambleMoves.push(move)
                break
            case 2:
                move = options[getRandomIntBetween(6, 9)] // 6,7,8
                scrambleMoves.push(move)
                break
            case 3:
                move = options[getRandomIntBetween(9, 12)] // 9,10,11
                scrambleMoves.push(move)
                break
            case 4:
                move = options[getRandomIntBetween(12, 15)] // 12,13,14
                scrambleMoves.push(move)
                break
            case 5:
                move = options[getRandomIntBetween(15, 18)] // 15,16,17
                scrambleMoves.push(move)
                break
        }
    }
    setScramble(scrambleMoves);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) // returns up to max - 1
}

function getRandomIntBetween(min, max) { // return a number from min to max - 1. Ex. 3, 9 returns 3 - 8
    return Math.floor(Math.random() * (max - min) + min)
}
  return (
    <div className="timer">
      <h1 className="time"><span className="time-s">00</span><span>:</span><span className="time-ms">00</span></h1>
      <h2 className="scramble">{scrambles}</h2>
      <p>Press and hold SPACE BAR to start timer </p>
     
      <div className="buttons" >
        <button className="timerbtn +2" onClick={()=>setScramble(scrambles)}>+2</button>
        <button className="timerbtn dnf">DNF</button>
        <button className="timerbtn cancel">X</button>
      </div>
      <img src={Scramble} alt="" width="100/200" />
    </div>
  )
}