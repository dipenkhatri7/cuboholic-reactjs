import logo from './logo.svg';
import './App.css';

function App() {
  
  function generateScramble(ofwhich, minmoves, maxmoves) {
    // let scramble = "";
    // let move1 = ofwhich[Math.random()*6]
    // let move2;
    // let m1;
    // let scramble_len = minmoves+Math.random()*(maxmoves-minmoves);
    // for(let i=0 ; i<scramble_len;i++)
    // {
    //   move2 = moves[Math.random()*moves.length];
    //   if(move1 === move2 )
    //   {
    //     i--;
    //   }
    //   else{
    //     m1 = ofwhich[Math.random()*ofwhich.length];
    //     scramble += move2 +m1;
    //     move1 = move2;
    //   }
    // }
    console.log("clicked")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={(ofwhich) => { 
          const moves = ['L', 'R', 'D', 'U', 'B', 'F']
          const threeScramble = [' ', '2', '`'];  
          let scramble = "";
          let move1 = ofwhich[Math.random() * 6]
          let move2;
          let m1;
          let scramble_len = minmoves + Math.random() * (maxmoves - minmoves);
          for (let i = 0; i < scramble_len; i++) {
            move2 = moves[Math.random() * moves.length];
            if (move1 === move2) {
              i--;
            }
            else {
              m1 = ofwhich[Math.random() * ofwhich.length];
              scramble += move2 + m1;
              move1 = move2;
            }
          }
        }}>Nirjal is </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
