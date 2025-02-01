/*
const { useEffect } = require("react");

useEffect(() => {callBack func}, [dependency array])

 1. Without the array -> on every single render
 We setup useEffect hook to run some code When :
    - Component renders for the Firts time
    - Whenever ir re-renders
    - some data in the component changes

 Dependency array -> []
    - When empty will only fire the useEffect ONCE
    - when specify a value, the effect will change only when the value changes
*/
/*
import { useState, useEffect } from "react"

const App = () => {
    const [ value, setValue] = useState(0)
    const [ something, setSomething] = useState(0)

    useEffect(() => {
        // if (value > 0){ MUST BE INSIDE
        console.log('call useEffect');
        document.title = `Increment ${value}`
      // } -> close if  
    }, [value]) // [value, something]


  return (
    <div>
        <h2>{value}</h2>
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <button onClick={() => setSomething(value + 1)}>Increment Something</button>
    </div>
  )
}

export default App
*/
// FETCHING DATA USING USEEFFECT ____________

import { useState, useEffect } from "react"

import React from 'react'

const App2 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            if(data && data.lenght) setData(data)
        }

        getData()
    },[])

  return (
    <div>
        <ul>
            {data.map(item => (
                <section key={item.id}>
                    <li>TITLE: {item.title}</li>
                    <li>BODY: {item.body}</li>
                </section>
            ))}
        </ul>

    </div>
  )
}

export default App2