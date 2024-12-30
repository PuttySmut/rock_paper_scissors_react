import { useState } from 'react'
import Header from './components/header'
import './App.css'
import './components/header.css'
import './assets/functions/gameLogic.js'
import {  gameChoice, gameRound } from './assets/functions/gameLogic'
import  GameButton  from './components/GameButton.jsx'
import  RoundResult  from './components/RoundResult.jsx'
import  rockPic from './assets/images/rock.png';
import  paperPic from './assets/images/paper.jpeg';
import  scissorsPic from './assets/images/scissors.png'
let openingText = <p>click a button to play</p>;

function App() {

  const [resultDisplay, setResultDisplay] = useState(openingText);
  
  function handleUserSelection(clickedChoice){
    //setUserSelection(clickedChoice);

    let roundResult = setResultDisplay(gameRound(clickedChoice));     
    console.log(`clicked choice is ${clickedChoice}`);
    return roundResult;
  }
  

  if(!resultDisplay) {
     openingText = ''; 
     
}


  return (
    <>
    <img src={rockPic}alt='rock pic' width='200' height='200'></img>
      <img src={paperPic} alt='paper pic' width='200' height='200'></img>
      <img src={scissorsPic} alt='scissors pic' width='200' height='200'></img>
      <Header />
      <div className="card">
      
        <GameButton onSelect={() => handleUserSelection('rock')}> ROCK </GameButton>
        <GameButton onSelect={() => handleUserSelection('paper')}>PAPER</GameButton>
        <GameButton onSelect={() => handleUserSelection('scissors')}>SCISSORS</GameButton>
        
      </div>
      {resultDisplay}
    </>
  )
}

export default App
