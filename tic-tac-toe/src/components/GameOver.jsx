export default function GameOver({playerName,isDraw,onRematch}){
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {!isDraw ? <p>{playerName} won the game !! 🏆 🏆 🏆 </p> 
       : <p>Its a draw !! </p>
      }
      <p><button onClick={onRematch}>Rematch</button></p>
    </div>
  )
}