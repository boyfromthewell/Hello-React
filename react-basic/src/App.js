import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const [buttonName, setButtonName]=useState('클릭');

  const clickButton=()=>{
    setButtonName('click');
  };
  return (
    <div className="App">
      <h1>soon</h1>
      <Counter click="click1" />
      <Counter click={buttonName}/>
      <button onClick={increment}>click {count}</button>
      <button onClick={clickButton}>Click</button>
    </div>
  );
}

export default App;
