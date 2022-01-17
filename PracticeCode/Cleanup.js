import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi"); // cleanup func -> 컴포넌트 없어질때 컨트롤 가능 (useEffect에 return 값으로 넣어주기)
    return () => {
      console.log("bye");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

/* state변경할때 모든 code들 항상 다시 실행, 어떨땐 괜찮을지라도 어떤 코드들은 
처음에 한번만 실행되고 다시는 실행되지 않도록 하고 싶을 때 -> useEffect 사용 */
