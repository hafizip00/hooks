import {React , useEffect, useRef, useState} from 'react'

function USeref() {

    const ref = useRef(0)
    const [name , setName] = useState('')

    // this hooks is used to render your code once it's not like useEffects to render everytime

    const refThree = useRef('')

    useEffect(()=>{
        refThree.current = name
    },[name])

    const handler = () =>{
        ref.current = ref.current + 1
    }

    const handlerTwo = () =>{
        console.log(refTwo.current);
        refTwo.current.focus()
        refTwo.current.value = 'number'
    }

    // this is also used to update the HTML DOM elements like getElementById in javaSCript; 
    const refTwo = useRef();

  return (
    <div>
        <input type='text'/>
        <h1>{ref.current}</h1> 
        <button onClick={handler}>Updation</button>
{/* We are Going to ffocus on Input Element by using UseRef Hook */}
{/* It is like a useState but without re-rendering */}
        <input type='text' ref={refTwo} onChange={e => setName(e.target.value)}/>

        <h1>{refThree.current}</h1> 
        <button onClick={handlerTwo}>Focus</button>

    </div>
  )
}

export default USeref