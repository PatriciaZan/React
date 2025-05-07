import React from 'react'

const Die = (prop) => {
    const styles ={
        backgroundColor: prop.isHeld ? "#59e391" : "white"
    }

  return (
    <button 
      style={styles} 
      onClick={prop.hold}
      aria-pressed={prop.isHeld}
      aria-label={`Die with a value of ${prop.value}, 
      ${prop.isHeld ? "is Held" : "Not held"}`}>
    {prop.value}</button>
  )
}

export default Die