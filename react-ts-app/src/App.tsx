import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTest } from "./api/test";

const App: React.VFC = () => {
  const { data: test, error } = useTest();
  const [counter, setCounter] = React.useState(0);
  if (error) return <div>failed to load</div>;
  if (!test) return <div>loading...</div>;

  function clickEventHandle() {
    setCounter((prev) => prev + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>counter: {counter}</p>
        <input type="button" onClick={() => clickEventHandle()} value="up" />
        <p>{test[0]}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
export default App;
