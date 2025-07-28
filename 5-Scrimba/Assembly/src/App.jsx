import './App.css'
import { useState } from 'react'
import { languages } from './languages/languages'
import { clsx } from  'clsx'


function Assembly() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([])
  //console.log(guessedLetters);
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function addGueseedLetter(letter){
    setGuessedLetters(prevLetters => {
     prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]

     // Another way of soing it, but it re-renders all the component, not good
      // const letterSet = new Set(prevLetters)
      // letterSet.add(letter)
      // return Array.from(letterSet)
    })
  }

  const languageElements = languages.map(lang => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return (
      <span 
          key={lang.name}
          className='chip' 
          style={styles}>
        {lang.name}</span>
    )
  })

  const letterElements = currentWord.split("").map((letter,index) => (
    <span key={index}>{letter.toUpperCase()}</span>
  ))

 const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

    //console.log(className);
    console.log(guessedLetters);
    
    return (
      <button 
          className={className}
          key={letter} 
          onClick={() => addGueseedLetter(letter)}
        >{letter.toUpperCase()}</button>
    )}
    )
  

  return (
    <>
      <main>
        <header>
          <h1>Assembly Game</h1>
          <p>Guess the word withing 8 attempts to keep the programming world safe</p>
        </header>

        <section className='game-status'>
          <h2>You win!</h2>
          <p>Well done!🙌</p>
        </section>

        <section className='language-chips'>
          {languageElements}
        </section>

        <section className='word'>
          {letterElements}
        </section>

        <section className='keyboard'>
          {keyboardElements}
        </section>

        <button className='newGame'>New Game</button>
      </main>
    </>
  )
}

export default Assembly
