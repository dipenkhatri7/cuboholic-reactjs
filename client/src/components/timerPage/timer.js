import './timer.css'
import Scramble from '../timerPage/scramble_img.png'
import { axios } from 'axios'
// import { useState } from 'react';
export default function Timer() {
  const [scramble, setScramble] = useState("");

  axios.post(url, {
    cube: cube
  }
    .then((res) => {
      setScramble(res.data.scramble);
    }))

  return (
    <div className="timer">
      <h1 className="time"><span className="time-s">00</span><span>:</span><span className="time-ms">00</span></h1>
      <p>Press and hold SPACE BAR to start timer </p>
      <button style={{ backgroundColor: "red" }} onClick={generateScramble(threeScramble, 16, 18)}>Nirjaljdlkaj kljalkd</button>
      <h2 className="scramble">{scramble}</h2>
      <div className="buttons" >
        <button className="timerbtn +2" >+2</button>
        <button className="timerbtn dnf">DNF</button>
        <button className="timerbtn cancel">X</button>
      </div>
      <img src={Scramble} alt="" width="100/200" />
    </div>

  )
}
