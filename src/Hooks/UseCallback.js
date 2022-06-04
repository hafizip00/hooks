import React, { useCallback, useState } from 'react'
import Hello from './Hello'

function UseCallback() {
    const [count , setCount] = useState(0)
    const [ip , setip] = useState(0)

const inc = useCallback(()=>{
    setCount(count + 1)
}, [ip])

// It will  render conditionally


  return (
    <div>
        <Hello increament = {inc}/>
        <h1>{count}</h1>
        <button onClick={()=> setip(ip+2)}>IPMAN</button>
    </div>
  )
}

export default UseCallback