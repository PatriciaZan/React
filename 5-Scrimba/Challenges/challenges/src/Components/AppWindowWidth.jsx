import React from 'react'
import WindowWidth from './WindowWidth/WindowWidth'
import { useState } from 'react'

const AppWindowWidth = () => {
    const [show, setShow] = useState(true)

    function toggle(){
        setShow(prevShow => !prevShow)
    }

  return (
    <main>
        <button onClick={toggle}> 
            Toggle WindowWidth
        </button>
        {show &&
            <WindowWidth />
        }
    </main>
  )
}

export default AppWindowWidth