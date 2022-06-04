import React from 'react'

function Hello({increament}) {
    {console.log("RENDERING")}
  return (
    <div>
        <button onClick={increament}>HELLOO</button>
    </div>
  )
}

export default Hello