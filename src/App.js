import React, { useState, useEffect } from "react";
import Display from "./display/display.components";
import Button from "./button/button.components";
// import History from "./history/history.components";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const calcResult = eval(input);
      setResult(calcResult);
      setHistory([...history, { input: input, result: calcResult }]);
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  useEffect(() => {
    const historyData = JSON.parse(localStorage.getItem("history"));
    if (historyData) {
      setHistory(historyData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <div className="calculator">
      {" "}
      <Display input={input} result={result} />
      {/* <History history={history} /> */}
      <div className="buttons">
        <Button label="C" onClick={handleClear} />
        <Button label="x" onClick={handleClear} />
        <Button label="%" onClick={() => handleInput("+")} />
        <Button label="/" onClick={() => handleInput("/")} />
        <Button label="7" onClick={() => handleInput("7")} />
        <Button label="8" onClick={() => handleInput("8")} />
        <Button label="9" onClick={() => handleInput("9")} />
        <Button label="*" onClick={() => handleInput("*")} />
        <Button label="4" onClick={() => handleInput("4")} />
        <Button label="5" onClick={() => handleInput("5")} />
        <Button label="6" onClick={() => handleInput("6")} />
        <Button label="-" onClick={() => handleInput("-")} />
        <Button label="1" onClick={() => handleInput("1")} />
        <Button label="2" onClick={() => handleInput("2")} />
        <Button label="3" onClick={() => handleInput("3")} />
        <Button label="+" onClick={() => handleInput("+")} />
        <Button label="0" onClick={() => handleInput("0")} />
        <Button label="." onClick={() => handleInput(".")} />
        <Button label="=" onClick={handleCalculate} />
      </div>
    </div>
  );
}

export default App;
