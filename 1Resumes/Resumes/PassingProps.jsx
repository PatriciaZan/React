// ------------------APP
// Drilling -> pass on all the components
/*
const ComponentApp = () => {
    const name = "Pati"
    return (
      <div>
        <ComponentA name={name}/>
      </div>
    )
  }

// ------------------A
const ComponentA = ({name}) => {
  return (
    <div>
        <ComponentB name={name}/>
    </div>
  )
}

export default ComponentA

// ------------------B
const ComponentB = ({name}) => {
    return (
      <div>
        <ComponentC name={name}/>
      </div>
    )
  }
export default ComponentB

// ------------------C
  const ComponentC = ({name}) => {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
  
export default ComponentC
*/
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Context API
// Manege and share state across you component tree
/*
import { createContext } from "react"

export const Data = createContext()
export const Data1 = createContext()

const ComponentApp = () => {
    const name = "Pati"
    const age = 23

    return (
      <div>
        <Data.Provider value={name}>
            <Data1.Provider value={age}>
                <ComponentA/>

            </Data1.Provider>
        </Data.Provider>
      </div>
    )
}


// ------------------A
const ComponentA = () => {
    return (
      <div>
          <ComponentB/>
      </div>
    )
  }
  
  export default ComponentA
  
  
  // ------------------C
  import { Data} from ""
    const ComponentC = () => {
      return (
        <Data.Consumer >
            { (name) => {
                //return <h1>{name}</h1>
                return (
                    <Data1.Consumer>
                        {(age) => {
                            return <h1>My name is; {name} and my age is: {age}</h1>
                        }}
                    </Data1.Consumer>
                )
            }}
        </Data.Consumer >
      )
    }
*/
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// useContext() hook
// access the context values provided by a Context obj directle within a functional component.

import { useContext } from "react"

const ConponentC = () => {
   const userName = useContext(Data)
   const age = useContext(Data1)

   return (
    <h1>My name is: {userName} and Im {age} years old</h1>
   )
}
