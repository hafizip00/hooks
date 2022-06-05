import React from 'react'
import CustomHook from './CustomHook'

function TestCustomHook() {

    const {count , handle , handlePro} = CustomHook(0 ,9 ,4);

  return (
    <div>
        <button onClick={handle}>COUNT</button>
        <button onClick={handlePro}>Multiply</button>
        <h1>{count}</h1>
    </div>
  )
}

export default TestCustomHook