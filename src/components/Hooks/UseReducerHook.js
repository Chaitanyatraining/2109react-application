import React, { useReducer } from 'react'

function UseReducerHook() {
        const reducer = (currentState,action)=>{
            //reducer is used to update the state based on action.
            // and returns the updated state
            switch (action){
                case "INCREMENT":
                    return currentState + 1;
                case "DECREMENT":
                    return currentState - 1;
            default:
            return currentState;
            }
        }
   
    const [count,dispatch] = useReducer(reducer,0)
  return (
    <div>
        <h2>useReducerHook</h2>
        <h3>{count}</h3>
        <button className='btn btn-primary me-3' onClick={()=>{dispatch("INCREMENT")}}>Increment</button>
        <button className='btn btn-primary' onClick={()=>{dispatch("DECREMENT")}}>Decrement</button>
    </div>
  )
}

export default UseReducerHook