import { useState, useEffect } from "react";
import AppStyles from "./App.module.css";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(0);
  const [input, setInput] = useState();

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = (e) => {
    setCost(e.target.value);
    console.log(e.target.value);
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <h1>The coins {loading ? "" : `You have (${coins.length}) coins`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChange}>
            <option>Select your coin</option>
            {coins.map((coin) => (
              <option
                value={coin.quotes.USD.price}
                id={coin.symbol}
                symbol={coin.symbol}
                name={coin.name}
              >
                {coin.name}({coin.symbol}) : ${Math.round(coin.quotes.USD.price)} USD
              </option>
            ))}
          </select>
          <div>
          <input
            type="text"
            value={input}
            placeholder="Please Input Your Dollars (Dollars -> Coins)"
            onChange={handleInput}
          />
          </div>
          <h2>You can get {Math.round(input/cost)} Coins!!</h2>
        </div>
      )}
    </>
  );
}

export default App;
