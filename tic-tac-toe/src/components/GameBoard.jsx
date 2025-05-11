

export default function GameBoard({board,setGameTurns}){
  return (
  
    <ol id="game-board">
      {
        board.map((row, rowIndex) => (
          <li key={rowIndex}>
           <ol>
            {row.map((cell, colIndex) => (
              <li key={`${rowIndex}-${colIndex}`}>
                <button onClick={() => setGameTurns(rowIndex, colIndex)}>
                  {cell}
                </button>
              </li>
              
            ))}

           </ol>
          </li>
        ))
      }
      
    </ol>
   
   
  );
}