import { useState } from "react";
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);


  const handleDecrement = () =>{
    if(counter > 0){
      setCounter((prevCount) => prevCount - 1 )
    }
    
  }

  return (
   
    
    <div className="App">
      
      <h1>Counter</h1>
      <div className="counter-container">
      
      
        
        <button className="btn red-btn" onClick={handleDecrement}>-</button>
        <h1>{counter}</h1>
        <button className="btn green-btn" onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
