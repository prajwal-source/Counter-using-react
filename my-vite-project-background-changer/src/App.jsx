import { useState } from 'react'

import './App.css'

function App() {
 
const [bgImage,setImage]=useState("/image-resources/welcome1.jpg")

  return (
    <>
     <div id='Box' style={{backgroundImage:`url(${bgImage})`,  backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat:'no-repeat'}}><h1></h1></div>
     <div className='buttons'>
      <button id='b1' onClick={()=>setImage("/image-resources/cat.jpg")}> Cat </button>
      <button id='b2'onClick={()=>setImage("/image-resources/dog.jpg")}> Dog</button>
      <button id='b4'onClick={()=>setImage("/image-resources/cow.jpg")}> Cow</button>
      <button id='b3'onClick={()=>setImage("/image-resources/tiger.jpg")}> Tiger</button>
      
     </div>
    </>
  )
}

export default App
