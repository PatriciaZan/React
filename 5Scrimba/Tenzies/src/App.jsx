import { useEffect, useRef, useState } from "react";
import Die from "./components/Dice/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"


function App() {
  const [dice, setDice] = useState(() => genarateAllNewDice())
  // Focus on the new game button for screen readers
  const buttonRef = useRef(null)


  const gameWon = dice.every(die => die.isHeld) && 
                  dice.every(die => die.value === dice[0].value);

  //For screen readers
  useEffect(() => {
    if(gameWon){
      buttonRef.current.focus()
    }
  },[gameWon])

  function genarateAllNewDice(){
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid()
      }))

    ///const newDice = [];
    // for (let i = 0; i < 10; i++){
    //     const random = Math.ceil(Math.random() * 6)
    //     newDice.push(random)
    // }
    // return newDice
  }
  //console.log(genarateAllNewDice());

  function rollDice(){
    if(!gameWon){
      // setDice(genarateAllNewDice)
       setDice(oldDice => oldDice.map(die => die.isHeld ? die : 
         {...die, value:Math.ceil(Math.random() * 6)}))
    } else{
      setDice(genarateAllNewDice())
    }
  }

  function hold(id){
    //console.log(id);
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
    )
  }

  const diceElements = dice.map(dieObj => (
      <Die 
          key={dieObj.id} 
          value={dieObj.value}
          isHeld={dieObj.isHeld}
          hold={() => hold(dieObj.id)}/>))

  return (
    <>
    <main>
      {gameWon && <Confetti />}
      {/* For Scrren readers*/}
      <div aria-live="polite" className="sr-only">
        {gameWon && <p>You won! Press "New Game" to play again.</p>}
      </div>

      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>

      <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
        </button>

    </main>
    </>
  )
}

export default App
