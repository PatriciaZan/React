import { useState } from 'react'
import './App.css'
import {languages} from './languages/languages'


function Assembly() {
  const [currentWord, setCurrentWord] = useState("react")

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

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

  const letterElements = [...currentWord].map((letter,index) => (
    <span key={index}>{letter.toUpperCase()}</span>
  ))

  const keyboardElements = [...alphabet].map(letter => (
    <button key={letter}>{letter.toUpperCase()}</button>
  ))
  

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
