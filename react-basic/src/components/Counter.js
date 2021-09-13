import react from "react";
import { useState } from "react/cjs/react.development";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 3);
  };
  const clickString=props.click || 'Click'; //click존재하면 props 사용, 존재 안하면 Click 사용

  return <button onClick={increment}> {clickString} {count}</button>;
};

export default Counter;
