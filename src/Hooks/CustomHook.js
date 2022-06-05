import React, { useState } from 'react'

function CustomHook(init, incre , prod) {

    const [state , setState] = useState(init)
    const handleState = () =>{
        setState(state + incre);
    }
    const handleStateTwo = () =>{
        setState(state * prod)
    }
  return [state , handleState , handleStateTwo]
}

export default CustomHook