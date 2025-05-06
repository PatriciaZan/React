import React from 'react'

const Die = (prop) => {
    const styles ={
        backgroundColor: prop.isHeld ? "#59e391" : "white"
    }

  return (
    <button style={styles} onClick={prop.hold}>{prop.value}</button>
  )
}

export default Die