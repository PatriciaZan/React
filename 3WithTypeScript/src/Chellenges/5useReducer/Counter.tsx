import { useReducer } from "react"
import { counterReducer, CounterState } from "./counterReducer"

const initialState: CounterState = {count: 0};


const Counter = () => {

   const [state, dispatch] = useReducer(counterReducer, initialState)

   const increment = () => dispatch({type : 'INCREMENT'})

   const decrement = () => dispatch({type: 'DECREMENT'})
   
  return (
    <div>
        <h2>Counter</h2>
        <p>Count: {state.count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter