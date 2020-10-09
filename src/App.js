import React, { useState, useEffect } from "react"
import { Link, Router, Switch, Route } from "react-router-dom"
import './App.css';
import SavedWorkouts from "./SavedWorkouts"
import axios from "axios"

function App() {

  //11-20 can be in a header comp
  //app.js will hold all routes
  //Make a Home and Calc Comp
  //Make a header comp
  return (
    <div>
      <div>
      <h1 className="Header">LiftLog</h1>
        <nav>
          <button>
            <Link to={`/Home`}>Home</Link>
          </button>
          <button>
            <Link to={`/SavedWorkouts`}>Saved workouts</Link>
          </button>
          <button>
            <Link to={`/Calculator`}>lb to kg calculator</Link>
          </button>
        </nav>
      </div>
      <Route exact path="/SavedWorkouts">
        <SavedWorkouts />
      </Route>
    </div>
  )
}

export default App;
