
import './App.css';
import {createContext} from 'react'
import { useState , useEffect} from 'react'
import UseState from './Hooks/UseState';
import UseEffects from './Hooks/UseEffects';
import UseMemo from './Hooks/UseMemo';
import USeref from './Hooks/UseRef';
import Context from './Hooks/Context';
import UseReducer from './Hooks/UseReducer';

export const Info = createContext() 
function App() {

  const [state , setState] = useState(90)
  return (
   <>
   {/* <UseState/>  */}
   {/* <UseEffects/> */}
   {/* <UseMemo/> */}
   {/* <USeref/> */}
 
{/* <Info.Provider value={state}>
  <Context/>
</Info.Provider>
<button onClick={()=> setState(prev => prev +1)}>Update</button> */}

  <UseReducer/>
   </>
   
  );
}

export default App;

