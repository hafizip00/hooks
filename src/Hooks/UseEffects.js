import {React ,useState, useEffect} from 'react'

function UseEffects() {
// this Work after every render like lifcycle methods
    const [count , setCount] = useState(0);
    const [countTwo , setCountTwo] = useState(0);
    useEffect(()=>{
        console.log("Runner useEffects  Hook");
    })

    // Abbove Implementation without dependency

    useEffect(()=>{
            console.log("Runner Two");
    }, [count])

    // With Implementation of Dependdency Aray


    useEffect(()=>{
        console.log("Clean up Hook");

        return (()=>{
            console.log("This will run after each completion of render...");
        })
    }, [])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>

        <h1>{countTwo}</h1>
        <button onClick={() => setCountTwo(countTwo + 1)}>Increment</button>
        <button onClick={() => setCountTwo(countTwo - 1)}>Decrement</button>

    </div>
  )
}

export default UseEffects