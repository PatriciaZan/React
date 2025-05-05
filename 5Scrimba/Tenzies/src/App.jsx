import { useState } from "react";
import Die from "./components/Dice/Die"
import {nanoid} from "nanoid"


function App() {
  const [dice, setDice] = useState(genarateAllNewDice())

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
    setDice(genarateAllNewDice)
  }

  const diceElements = dice.map(dieObj => (
      <Die 
          key={dieObj.id} 
          value={dieObj.value}
          isHeld={dieObj.isHeld}/>))

  return (
    <>
    <main>
      <div className="dice-container">
        {diceElements}
      </div>

      <button className="roll-dice" onClick={rollDice}>Roll</button>

    </main>
    </>
  )
}

export default App
