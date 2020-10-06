import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./component/Todo"; 

function App() {
  return (
    <div className="App">
      <h1>To do </h1>
      <Todo></Todo>
    </div>
  );
}

export default App;