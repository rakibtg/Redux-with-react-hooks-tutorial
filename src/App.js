import React, { useState, useEffect } from "react";
import "./App.css";
import User from "./User";
import ReduxCounter from "./ReduxCounter";

const netRequest = () => {
  console.log("Network Request");
};

function App() {
  const [count, setCount] = useState(0);
  const [fruit, updateFruit] = useState("apple");

  // componentDidMount life-cycle
  useEffect(() => {
    netRequest();
  }, []);

  // componentDidUpdate life-cycle
  useEffect(() => {
    console.log("componentDidUpdate life-cycle");
  });

  // shouldComponentUpdate life-cycle
  useEffect(() => {
    console.log("Count gets an update");
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          You have {count} {fruit}!
        </p>
        {count < 1 && <User />}
        <button
          onClick={() => {
            const incrementedValue = count + 1;
            setCount(incrementedValue);
            if (incrementedValue > 1) {
              updateFruit("apples");
            }
          }}
        >
          +1
        </button>
        <h2>Redux Store:</h2>
        <ReduxCounter />
        <p>Subscribe and follow me @rakibtg</p>
      </header>
    </div>
  );
}

export default App;
