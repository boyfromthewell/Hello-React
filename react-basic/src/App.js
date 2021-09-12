import React, { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    alert("submitted");
    console.log(userName, Password);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          placeholder="UserName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <br />
        <input
          placeholder="Password"
          value={Password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
