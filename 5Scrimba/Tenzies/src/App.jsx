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
   // setDice(genarateAllNewDice)
    setDice(oldDice => oldDice.map(die => die.isHeld ? die : 
      {...die, value:Math.ceil(Math.random() * 6)}))
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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>

      <button className="roll-dice" onClick={rollDice}>Roll</button>

    </main>
    </>
  )
}

export default App
