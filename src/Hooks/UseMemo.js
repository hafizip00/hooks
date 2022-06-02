import React, { useEffect, useMemo, useState } from 'react'

function UseMemo() {
    // this Hook is used for caching data which repeated again and again or peace of code which takes time more than average

    const [state , setState] = useState(0);
    const [dark , setdark] = useState(false)
    const [stateTwo , setStateTwo] = useState(0);
    // const value = useMemo(slow())
    const val = useMemo(()=>{
        return slow(state);
    }, [state])

    // It Only effects the code which us dependent on the array defined
    // It cahche the same variables which are not changing often


    const style = useMemo(()=>{
        return {
            color: dark ? 'white' : 'black',
            background : dark ? 'black' : 'white'
        }
    }, [dark])

    useEffect(()=>{
        console.log("IS IT");
    },[style])

  return (
    <div>
        <input type='number' value={state} onChange={(e => setState(e.target.value))}/>
        <h1>{state}</h1>

        <input type='number' value={stateTwo} onChange={e => setStateTwo(e.target.value)}/>
        <h1>{stateTwo}</h1>

        <p style={style}>This is dummy</p>
        <button onClick={()=> setdark(!dark)}>Change</button>
    </div>
  )

    function slow(num){
        for (let index = 0; index < 200000000*4; index++) {}
        return num
    }

}

export default UseMemo