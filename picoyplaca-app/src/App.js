import React from "react";
import "./App.css";
import Content from "./sections";
import { text } from "./constants";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{text.title}</h1>
      </header>
      <Content />
    </div>
  );
}

export default App;
