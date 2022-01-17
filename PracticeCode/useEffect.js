import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("i run all the time");

  useEffect(() => {
    /*우리의 코드 한번만 실행되게 도와줌*/
    console.log("call the api");
  }, []); /* deps : 빈 array는 한번만 실행*/

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); /*keyword가 변화할때 코드를 실행*/

  return (
    <div>
      <input
        value={keyword}
        type="text"
        onChange={onChange}
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

/* state변경할때 모든 code들 항상 다시 실행, 어떨땐 괜찮을지라도 어떤 코드들은 
처음에 한번만 실행되고 다시는 실행되지 않도록 하고 싶을 때 -> useEffect 사용 */
