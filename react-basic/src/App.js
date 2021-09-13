import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [kwon, setKwon] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count, kwon]);

  useEffect(()=>{
    console.log('first rendering');
  },[]) //[] 처음 렌더링 했을때만 실행

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>soon</h1>
      <button onClick={increment}>click</button>
      <button onClick={() => setKwon(kwon + 1)}>click1</button>
    </div>
  );
}

export default App;
