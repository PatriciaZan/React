import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const WindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(()=> {
        function watchWindowWidth(){
            //console.log("Resized!");
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWindowWidth)

        // cleanup function
        return function(){
            window.removeEventListener("resize", watchWindowWidth)
        }
    }, [])
  return (
    <>
    <h1>Window Width: {windowWidth}</h1></>
  )
}

export default WindowWidth