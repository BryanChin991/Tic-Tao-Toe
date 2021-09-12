import './App.css';
import react, {useState} from 'react'
import Board from './components/Board';
import {GetWinningTeam} from './components/helper';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winning = GetWinningTeam(squares)
  
  const handleSubmit = (i)=>{
    if(winning || squares[i]) return;
    squares[i] = xIsNext ? 'X' : 'O'
    const newSqaures = [...squares]
    setSquares(newSqaures)
    setXIsNext(!xIsNext)
  }

  return (
    <div className='App'>
      <h1 style={{fontSize:'60px', letterSpacing:'3rem', margin:'20px', color:'Darkblue'}}>Tic Tac Toe</h1>
      {/* title */}
      <h2 style={xIsNext ? {color:'green'} : {color:'blue'}}>{winning ? `${winning} WIN!` : (xIsNext ? 'X turn' : 'O turn')}</h2>
      <Board winning={winning} Sqaures={squares} onClick={handleSubmit} />
      <hr />

    </div>
  );
}

export default App;
