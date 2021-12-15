import React from "react";
import './App.css';
import Tiktacktoe, { Game } from "./component/Tiktacktoe";


function App() {
  return (
    <div className="App">
      <h1> TIK TAC TOE<h1>
      <Tiktacktoe/>
      <Game/>

    </div>
  );
}

export default App;
