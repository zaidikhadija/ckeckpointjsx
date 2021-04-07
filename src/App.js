
import './App.css';
import React from 'react';
import './style.css';
import dog from "./dog.jpg";
function App() {
  return (
  <>
    <div className="App"/>
    <div  className="hautPage" style={{border:'solid 1px black',maxWidth:'100vw'}}>;

    <h1 className="titleRed">Zaidi Khadija</h1>;
  
   
    <img className='dog'src={dog} alt='dog'/>
   
   
    <img className ='dog' src="/dog.jpg" alt="dog" />;
   
   </div>
   
   <video width="320" height="240" controls />

   <video width='320' height='240' controls  src='myVideo.mp4' type='video/mp4' >

</video>
</>
  )
  }

export default App ;
