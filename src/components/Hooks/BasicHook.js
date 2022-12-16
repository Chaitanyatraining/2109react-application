import React, { useState } from 'react'

function BasicHook() {
    const [count,setCount] = useState(0);

    const incrementfunc = ()=>{
        setCount(count+1)
    }
    const decrementfunc = ()=>{
        setCount(count-1)
    }

  return (
    <>
    <div>Counter</div>
    <h2>{count}</h2>
    <button className='btn btn-primary me-3' onClick={incrementfunc}>Increment</button>
    <button className='btn btn-danger' onClick={decrementfunc}>Decrement</button>
    </>
  )
}

export default BasicHook