import React, { useContext } from 'react'
import { Info } from '../App'

function Context() {
    const vle = useContext(Info)
  return (
    <div>
        <h1>{vle}</h1>
        <Info.Consumer>
            {
                (color)=>{
                    return <h1>{color}</h1>
                }
            }
        </Info.Consumer>
    </div>
  )
}

export default Context