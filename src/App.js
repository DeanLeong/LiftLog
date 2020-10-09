import React from 'react';
import './App.css';
import Workouts from "./Workouts"

function App() {
  return (
    <div className="App">
      <header>
        <h1>LiftLog</h1>
        <Workouts />
      </header>
    </div>
  );
}

export default App;
