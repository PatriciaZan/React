import { userReducer, useState} from 'react';
//import { counterReducer, initialState } from './'


const initialState = { count: 0 }

const reducer = (state, action) => {

    switch(action.type){
        case "increment":
            return {...state, count: state.count + 1};
        case "decrement":
            return{...state, count: state.count - 1}

        case "incrementByAmount":
            return{count: state.count + action.payload}
        case "decrementByAmount":
            return{count: state.count - action.payload}

        case "reset":
            return {...this.state, count: 0}
    
        default:
            return state;
    }
}

export {initialState, reducer}


// Counter.jsx

const Counter = () => {

    const [state, dispatch] = userReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState(0)

    const handleIncrement = () => dispatch({ type: "Increment"})
    const handleDecrement = () => dispatch({ type: "Decrement"})

    const handleIncrementByAmount = () =>{
        dispatch({type: 'incrementByAmount', payload: +inputValue})
        setInputValue(0)
    }
    const handleDecrementByAmount = () =>{
        dispatch({type: 'decrementByAmount', payload: +inputValue})
        setInputValue(0)
    }

  return (
      <div>
        <h1>Count: {state.count}</h1>

        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        
        <div>
            <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button onClick={handleIncrementByAmount}>Add</button>
            <button onClick={handleDecrementByAmount}>Subtract</button>
        </div>

    </div>
  )
}

export default Counter