import React, { useState, useEffect } from "react"
import { Link, Router, Switch, Route } from "react-router-dom"
import './App.css';
import SavedWorkouts from "./SavedWorkouts"
import axios from "axios"

function App() {

  return (
    <div>
      <div>
      <h1 className="Header">LiftLog</h1>
        <nav>
          <button>Home</button>
          <Link to={`/SavedWorkouts`}>
            <button>Saved workouts</button>
          </Link>
          <button>lb to kg calculator</button>
        </nav>
      </div>
    </div>
  )
}

export default App;
