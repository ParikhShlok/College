import { useState } from 'react'; 
import kohli from './assets/2.jpg'; 
import './my.css'; 

function App() {
  var abc="React"
  return (
    <>
      <h1>{abc}</h1>
      <h1 style={{ color: 'red' }}>Welcome to React !</h1>
      <h2 className="Para">External CSS</h2>
      
      {/* JSX Comment */}
      <ol>
        <li>Apple</li>
        <li>Apple</li>
      </ol> 
      
      <img src={kohli} alt="RCB" />
      <img src="1.jpg" alt="ggfp" />
    </>
  );
}

export default App;
