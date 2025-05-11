import { useState } from "react";
import PlayersComponent from "./PlayersComponent";
import GameBoard from "./GameBoard";
import GameOver from "./GameOver";
import Log from "./Log";
import winnnigConditions from "../winning-conditions";

const initialGameBoard = [
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' '],
                        ];


function checkWinning(board){
  for(const el of winnnigConditions){

       let firstSymbol = board[el[0].row][el[0].col];
       let secondSymbol = board[el[1].row][el[1].col];
       let thirdSymbol = board[el[2].row][el[2].col];


       if(firstSymbol != ' ' && firstSymbol == secondSymbol && firstSymbol == thirdSymbol){
        return firstSymbol;
       }
       
  }
  return false;
}

export default function GameComponent (){

  //const [activePlayerSymbol,setActivePlayerSymbol] = useState('X');
  const [gameTurns,setGameTurns] = useState([]);
  const [playerNames,setPlayerNames ] = useState(["max1","max2"]);
  
  function handlePlayerNames(event,symbol){
      const newPlayerNames = [...playerNames];
      if(symbol == 'X'){
        newPlayerNames[0] = event.target.value;
      }else{
        newPlayerNames[1] = event.target.value;
      }
      setPlayerNames(newPlayerNames);
  }
  let activePlayerSymbol = 'X';
  
  if(gameTurns.length > 0 && gameTurns[0].playerSymbol == 'X'){
    activePlayerSymbol = 'O';
  }

  let newGameBoard = initialGameBoard.map(row => [...row]);
  
  gameTurns.map((Element) => {
    let {Cell,playerSymbol} = Element;
    let {row,col} = Cell;
    newGameBoard[row][col] = playerSymbol;
  })

  let winner = checkWinning(newGameBoard);
  let draw   = (gameTurns.length == 9 && winner == false);

  function handleRematch(){
    setGameTurns([]);
  }

  function handleGameTurns(row,col){
     
     let currSymbol = 'X';
     if(gameTurns.length > 0){
      currSymbol = (gameTurns[0].playerSymbol == 'X') ? 'O' :'X';

     }
     let isCellAlreadyPopulated = false;
     for(let el of gameTurns ){
          if(el.Cell.row == row && el.Cell.col == col){
            isCellAlreadyPopulated = true;
            break;
          }
            
     }
     if(isCellAlreadyPopulated == false){
      const newGameTurns = [ {Cell : {row : row , col:col},playerSymbol : currSymbol},...gameTurns];
      ;
       setGameTurns(newGameTurns);
     }

  }
  
   return (
    <>
    <section id="game-container">
    <ol id="players" className="highlight-player">
        <PlayersComponent playerName={playerNames[0]} symbol="X" active={activePlayerSymbol == 'X'} updatePlayerName={handlePlayerNames}></PlayersComponent>
        <PlayersComponent playerName={playerNames[1]} symbol="O" active={activePlayerSymbol == 'O'} updatePlayerName={handlePlayerNames} ></PlayersComponent>
    </ol>
    { winner || draw ? <GameOver playerName={winner == 'X' ? playerNames[0] : playerNames[1]} isDraw={draw} onRematch={handleRematch} ></GameOver> : null }
    <GameBoard board ={newGameBoard} setGameTurns={handleGameTurns}>
    </GameBoard>
    </section>
    <Log turns ={gameTurns}></Log>
    </>
    
   
  );

  // game board

  // leaderboard 
}