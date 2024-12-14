import { useEffect, useState } from "react";

const Square = ({index,onclick,value}) => {
    return(
        <button className="button" onClick={()=>onclick(index)}>{value}</button>
    )
}

const Game = () => {
    const [xTurn, setXTurn] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(''))
    const [winnerName, setWinnerName] = useState('')
    function handleClick(index){
        if(squares[index] == '' && winnerName == ''){
            squares[index] = xTurn?"X":"O";
        }
        setXTurn(!xTurn)
    }

    const winningCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let n = winningCondition.length

    function winner(){
        console.log("clicked");
        
        for(let i=0;i<n;i++){
            let [x,y,z] = winningCondition[i]
            if(squares[x] && squares[x] == squares[y] && squares[x] == squares[z]){
                setWinnerName(squares[x])
            }
        }
    }

    function hanldeRestart(){
        setSquares(Array(9).fill(''))
        setWinnerName('')
    }

    useEffect(()=>{
        winner()
    },[xTurn])
    
    
  return (
    <main className="game">
      <div>
        <Square index="0" onclick={handleClick} value={squares[0]}/>
        <Square index="1" onclick={handleClick} value={squares[1]}/>
        <Square index="2" onclick={handleClick} value={squares[2]}/>
      </div>
      <div>
        <Square index="3" onclick={handleClick} value={squares[3]}/>
        <Square index="4" onclick={handleClick} value={squares[4]}/>
        <Square index="5" onclick={handleClick} value={squares[5]}/>
      </div>
      <div>
        <Square index="6" onclick={handleClick} value={squares[6]}/>
        <Square index="7" onclick={handleClick} value={squares[7]}/>
        <Square index="8" onclick={handleClick} value={squares[8]}/>
      </div>
      {winnerName && <h3 className="winner">winner is {winnerName}</h3>}
      {squares.every(ele=>ele!=='') && !winnerName && <h3 className="winner">Draw! start the game again...</h3>}
      <button className="restart" onClick={()=>hanldeRestart()}>Restart</button>
    </main>
  );
};

export default Game;
