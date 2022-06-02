import {React, useState} from 'react'

function UseState() {

const initial = {count : 0 , theme : 'Blue'};

const run = ()=>{ // This will run everytime I render
    console.log("Runner");
}

    const [count , setCount] = useState(0);
    // Testing 0
    const [oCount , setOcount] = useState(run) // This will run everytime I render
    // Testing 1
    const [countTwo , setCountTwo] = useState(()=>{ //  runs only once
        console.log("Runner");
    })



  return (
    <div>
        <p>
            Simple use state 
            <h1>{count}</h1>
        </p>
        <button onClick={() => setCount(prev => prev+1)}>Increment</button>
        <button onClick={() => setCount(prev => prev-1)}>Decrement</button>

        <br/>


    </div>
  )
}

export default UseState