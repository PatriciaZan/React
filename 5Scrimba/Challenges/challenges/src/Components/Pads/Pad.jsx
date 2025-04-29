import React, { useState } from 'react'

const Pad = (props) => {
    //const [on, setOn] = useState(props.on)

  return (
    <button
        style={{backgroundColor: props.color}}
        className={props.on ? "on" : undefined}
        onClick={() => props.toggle(props.id)}
    ></button>
  )
}

export default Pad