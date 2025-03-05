// It's a hook that is similar to useState, but for more complex state objects or state transitions with multiple sub-values

// const[state, dispatch] =useReducer(reducer,initialState)

/*
    state    -> the current state value which you can use in your component
    dispatch -> FUNCTION you call to send actions to the reducer, which then updates the state

    reducer -> FUNCTION , describes how the state should change based on actions
    initialState -> starting value for the state when it first renders

*/

import { useReducer } from "react";

const initialState = { count: 0};

const reducer = (state, action) => {
    switch(action.type){
        case "increment":
            return {...state, count: state.count + 1};
        case "decrement":
            return{...state, count: state.count - 1}
        case "reset":
            return {...this.state, count: 0}

        default:
            return state;
    }
}

const userReducer = () => {
    const [state, dispatch] = userReducer(reducer, initialState)


  return (
    <div>
        <button onClick={() => dispatch({ type: "increment"})}>+</button>
        <button onClick={() => dispatch({ type: "decrement"})}>-</button>
        <button onClick={() => dispatch({ type: "reset"})}>reset</button>

        <h1>Count: {state.count}</h1>
    </div>
  )
}

export default userReducer