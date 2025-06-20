
import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);
const addValue=()=>{
  setCounter(counter+1);
}
const removeValue=()=>{
  if (counter<=0) {
    alert("Counter cant be negative");
    return;
  }
  setCounter(counter-1);
}
  return (
  <>
   <h1>This is counter project</h1>
   <h2>Counter Value : {counter}</h2>
   <button onClick={addValue}>Add Value</button>
   <br />
   <br />
   <button onClick={removeValue}>Remove Value</button>

   <h1>{counter}</h1>
  </>
  )
}

export default App
