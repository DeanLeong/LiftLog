import './App.css';
import Calculator from "./Calculators"
import Header from "./Header"
import React from "react"
import { Route } from "react-router-dom"
import SavedWorkouts from "./SavedWorkouts"
import SubmitWorkout from "./SubmitWorkout"

function App() {

  //11-20 can be in a header comp
  //app.js will hold all routes
  //Make a Home and Calc Comp
  return (
    <div>
      <div className="Header">
        <Header />
      </div>
      <div>
      <Route exact path="/SubmitWorkout">
        <SubmitWorkout />
      </Route>
      </div>
      <div className="SavedWorkouts">
      <Route exact path="/SavedWorkouts">
        <SavedWorkouts />
      </Route>
      <div className="Calculator">
        <Route exact path="/Calculator">
          <Calculator />
        </Route>
      </div>  
      </div>
    </div>
  )
}

export default App;
