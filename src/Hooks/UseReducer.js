import {React , useReducer}from 'react'

const initialValue = 0;
const initialValueTwo = {val : 0}
const initialOB = {vall : "HAPPY "}

const reducer = (state , action) =>{
    switch(action){
        case 'clicked' : return state = 'CLICKED'; break;
        case 'clickedTwo' : return state = 'CLICKED TWO'; break;
        default: return state;
    }
}

const reducerTwo = (state , action)=>{
        switch(action.type){
            case 'CLICKEDOBTWO' : return {val : "GOOGLE"} ; break;
            case 'CLICKEDOBTWOTWO' : return {val : "FACEBOOK"}; break;
            case 'CLICKEDOBJECT' : return {vall : "YAHOOOOO....!"} ; break;
            case 'CLICKEDOBTWOOBJRCT' : return {vall : "VIMEO.....!"} ; break; 
            default : return state.val;

        }
}


function UseReducer() {

    const [state , dispatch] = useReducer(reducer , initialValue)

    const [stateTwo , dispatchTwo] = useReducer(reducerTwo , initialValueTwo)
    const [stateOB , dispatchOB] = useReducer(reducerTwo , initialOB)


  return (
    <div>
        <button onClick={()=> dispatch('clicked')}>CLICKED</button>
        <button onClick={()=> dispatch('clickedTwo')}>CLICKED TWO</button>
        <h1>{state}</h1>
        <br/>
        <button onClick={()=> dispatchTwo({type : 'CLICKEDOBTWO'})}>CLICKED TWO OBJECT</button>
        <button onClick={()=> dispatchTwo({type : 'CLICKEDOBTWOTWO'})}>CLICKED TWO TWO OBJECT</button>
        <h1>{stateTwo.val}</h1>
        <br/>
        <button onClick={()=> dispatchOB({type : 'CLICKEDOBJECT'})}>CLICKED OBJECT</button>
        <button onClick={()=> dispatchOB({type : 'CLICKEDOBTWOOBJRCT'})}>CLICKED TWO OBJECT OBJECT</button>
        <h1>{stateOB.vall}</h1>

    </div>
  )
}

export default UseReducer