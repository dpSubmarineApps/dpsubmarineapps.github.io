import React from 'react';
import './resources/styles/App.css';
import style from "./resources/styles/simpsons.css";
import gameStyle from "./resources/styles/gameboard.css";
import Gameboard from "./components/Gameboard";

function App() {
  return (
    <div className="App">
        <Gameboard/>
    </div>
  );
}

export default App;
