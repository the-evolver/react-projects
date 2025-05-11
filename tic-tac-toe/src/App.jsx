import Header from './components/Header';
import GameLogo from '../public/game-logo.png'
import GameComponent from './components/GameComponent';

function App() {
  
  return (
    <main>
    <Header srcImg={GameLogo} heading={"Tic-Tac-Toe"}></Header>
    
    <GameComponent></GameComponent>
    
   

    </main>
  )
}

export default App
