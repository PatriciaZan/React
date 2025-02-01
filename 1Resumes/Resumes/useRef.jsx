// useRef Hook
// Provide ways to access and interact with DOM elements
// to persist values across renders without causing a re-render

import { useRef } from "react";



const useRefComponent = () => {
    //const element = useRef(null)
    //console.log(element); // {current: null}
    const inputElement = useRef(null)
    console.log(inputElement);
    
    const focusInput = ()  => {
        inputElement.current.focus();
        inputElement.current.value = "Patricia"
    }

  return (
    <div>
        <input type="text" ref={inputElement}/>
        <button onClick={() => focusInput()} >Focus & Write</button>
    </div>
  )
}

export default useRefComponent