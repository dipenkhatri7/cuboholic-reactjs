import './timer.css'
import Cube from './cube';
import { useState } from 'react';

export default function Timer() {
  const [scramble, setScramble] = useState('');
  let three = ['', '`', '2'];
  let four = ['', '`', '2', 'w', 'w2', 'w']
  const [ofwhich, setOfwhich] = useState(three)
  const [topcube, setTopcube] = useState([[]]);
  const [frontcube, setFrontcube] = useState([[]]);
  const [rightcube, setRightcube] = useState([[]]);
  const [backcube, setBackcube] = useState([[]]);
  const [leftcube, setLeftcube] = useState([[]]);
  const [bottomcube, setBottomcube] = useState([[]]);

  function getRandom(max) {
    return Math.floor(Math.random() * max)
  }

  function generateScramble() {
    let moves = ['L', 'R', 'B', 'F', 'D', 'U'];
    let scramble = ""
    let maxmoves = 21;
    let minmoves = 18;

    let move1 = moves[getRandom(moves.length)]
    let move2;
    for (let i = 0; i < Math.floor(Math.random() * (maxmoves - minmoves)) + minmoves; i++) {
      move2 = moves[getRandom(moves.length)];
      if (move2 === move1) {
        i--;
      }
      else {
        move1 = move2;
        scramble += move1 + ofwhich[getRandom(ofwhich.length)] + " ";
      }
    }
    setScramble(scramble);

    function scrambleDrawer(cube_size) {
      function makeArray(a, b) {
        var arr = new Array(a)
        for (var i = 0; i < a; i++)
          arr[i] = new Array(b)
        return arr
      }
      let w = 1;
      let g = 2;
      let r = 3;
      let b = 4;
      let o = 5;
      let y = 6;

      let top_cube = makeArray(cube_size, cube_size);
      let front_cube = makeArray(cube_size, cube_size);
      let right_cube = makeArray(cube_size, cube_size);
      let back_cube = makeArray(cube_size, cube_size);
      let left_cube = makeArray(cube_size, cube_size);
      let bottom_cube = makeArray(cube_size, cube_size);

      function swap_rows(x, y, which_row) {
        let temp = new Array(cube_size);
        for (let i = 0; i < cube_size; i++) {
          temp[i] = x[which_row][i];
          x[which_row][i] = y[which_row][i];
          y[which_row][i] = temp[i];
        }
      }

      function swap_column(x, y, which_column_x, which_column_y, n) {
        let temp = new Array(cube_size);
        for (let i = 0; i < cube_size; i++) {
          if (n == 1) {
            temp[i] = x[cube_size - i - 1][which_column_x];
            x[cube_size - i - 1][which_column_x] = y[i][which_column_y];
            y[i][which_column_y] = temp[i];
            continue;
          }
          temp[i] = x[i][which_column_x];
          x[i][which_column_x] = y[i][which_column_y];
          y[i][which_column_y] = temp[i];
        }
      }

      function rotate_anti_clockwise(x) {
        let n = cube_size;
        let temp1 = makeArray(cube_size, cube_size);
        for (let i = 0; i < n; ++i) {
          for (let j = 0; j < n; ++j) {
            temp1[i][j] = x[j][n - i - 1];
          }
        }
        for (let i = 0; i < n; ++i) {
          for (let j = 0; j < n; ++j) {
            x[i][j] = temp1[i][j];
          }
        }
      }

      function rotate_clockwise(x) {
        let n = cube_size;
        let temp1 = makeArray(cube_size, cube_size);
        for (let i = 0; i < n; ++i) {
          for (let j = 0; j < n; ++j) {
            temp1[i][j] = x[n - j - 1][i];
          }
        }
        for (let i = 0; i < n; ++i) {
          for (let j = 0; j < n; ++j) {
            x[i][j] = temp1[i][j];
          }
        }
      }

      function swap_column_to_row(x, y, which_column, which_row, n) {
        let temp1 = new Array(cube_size);
        let temp2 = new Array(cube_size);
        for (let i = 0; i < cube_size; i++) {
          if (n == 1) {
            temp1[i] = x[cube_size - i - 1][which_column];
            temp2[i] = y[which_row][i];
            x[cube_size - i - 1][which_column] = temp2[i];
            y[which_row][i] = temp1[i];
            continue;
          }
          temp1[i] = x[i][which_column];
          temp2[i] = y[which_row][i];
          x[i][which_column] = temp2[i];
          y[which_row][i] = temp1[i];

        }
      }

      function initializing(color) {
        let cube = makeArray(cube_size, cube_size);
        for (let i = 0; i < cube_size; i++) {
          for (let j = 0; j < cube_size; j++) {
            cube[i][j] = color;
          }
        }
        return cube;
      }

      function U() {
        swap_rows(front_cube, left_cube, 0);
        swap_rows(front_cube, back_cube, 0);
        swap_rows(front_cube, right_cube, 0);
        rotate_clockwise(top_cube);
      }

      function D() {
        swap_rows(front_cube, left_cube, (cube_size - 1));
        swap_rows(front_cube, back_cube, (cube_size - 1));
        swap_rows(front_cube, right_cube, (cube_size - 1));
        rotate_clockwise(bottom_cube);
      }

      function R() {
        swap_column(front_cube, bottom_cube, (cube_size - 1), (cube_size - 1), 0);
        swap_column(front_cube, back_cube, (cube_size - 1), 0, 1);
        swap_column(front_cube, top_cube, (cube_size - 1), (cube_size - 1), 0);

        rotate_clockwise(right_cube);
      }

      function L() {
        swap_column(front_cube, top_cube, 0, 0, 0);
        swap_column(front_cube, back_cube, 0, (cube_size - 1), 1);
        swap_column(front_cube, bottom_cube, 0, 0, 0);
        rotate_clockwise(left_cube);
      }

      function F() {
        swap_column_to_row(left_cube, top_cube, (cube_size - 1), (cube_size - 1), 1);
        swap_column_to_row(left_cube, bottom_cube, (cube_size - 1), 0, 0);
        swap_column_to_row(right_cube, bottom_cube, 0, 0, 1);
        rotate_anti_clockwise(front_cube);
      }

      function B() {
        swap_column_to_row(left_cube, top_cube, 0, 0, 1);
        swap_column_to_row(left_cube, bottom_cube, 0, (cube_size - 1), 0);
        swap_column_to_row(right_cube, bottom_cube, (cube_size - 1), (cube_size - 1), 1);
        rotate_anti_clockwise(back_cube);
      }

      top_cube = initializing(w);
      front_cube = initializing(g);
      right_cube = initializing(r);
      back_cube = initializing(b);
      left_cube = initializing(o);
      bottom_cube = initializing(y);

      // print_cube();
      let scramblearray = scramble.split(" ");
     
      for (let i=0; i < scramblearray.length; i++) {
        if (scramblearray[i] === "L") {
          L()
        }
        else if (scramblearray[i] === "B") {
          B()
          B()
          B()
        }
        else if (scramblearray[i] === "D") {
          D()
          D()
          D()
        }
        else if (scramblearray[i] === "U") {
          U()
        }
        else if (scramblearray[i] === "F") {
          F()
        }
        else if (scramblearray[i]==="R"){
          R()
          R()
          R()
        }
        else if (scramblearray[i] === "L`") {
          L()
          L()
          L()
        }
        else if (scramblearray[i] === "U`") {
          U()
          U()
          U()
        }
        else if (scramblearray[i] === "B`") {
          B()
        }
        else if (scramblearray[i] === "D`") {
          D()
        }
        else if (scramblearray[i] === "U`") {
          U()
          U()
          U()
        }
        else if (scramblearray[i] === "F`") {
          F()
          F()
          F()
        }
        else if (scramblearray[i]==="R`"){
          R()
        }
        else if (scramblearray[i] === "L2") {
          L()
          L()
        }
        else if (scramblearray[i] === "U2") {
          U()
          U()
        }
        else if (scramblearray[i] === "B2") {
          B()
          B()
        }
        else if (scramblearray[i] === "D2") {
          D()
          D()
        }
        else if (scramblearray[i] === "U2") {
          U()
          U()
        }
        else if (scramblearray[i] === "F2") {
          F()
          F()
        }
        else if (scramblearray[i] === "R2") {
          R()
          R()
        }
      }
      // print_cube();
      setTopcube(top_cube)
      setFrontcube(front_cube)
      setRightcube(right_cube)
      setBackcube(back_cube)
      setLeftcube(left_cube)
      setBottomcube(bottom_cube)


    }
    scrambleDrawer(3);
  }


  return (
    <div className="timer">
      <h1 className="time"><span className="time-s">00</span><span>:</span><span className="time-ms">00</span></h1>
      <p onClick={generateScramble}>Press and hold SPACE BAR to start timer </p>
    
      <h1>{scramble}</h1>
        <div style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Cube cube={leftcube} />
          </div>
          <div >
            <Cube cube={topcube} />
            <Cube cube={frontcube} />
            <Cube cube={bottomcube} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Cube cube={rightcube} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Cube cube={backcube} />
          </div>
        </div>
    </div>

  )
}
