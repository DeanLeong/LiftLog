import './App.css';
import Calculator from "./Calculators"
import Footer from "./Footer"
import Header from "./Header"
import React from "react"
import { Route } from "react-router-dom"
import SavedWorkouts from "./SavedWorkouts"
import SubmitWorkout from "./SubmitWorkout"
import HomePage from './HomePage';

function App() {

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="home-page">
      <Route exact path="/">
        <HomePage />
      </Route>
      </div>
      <div>
      <Route exact path="/SubmitWorkout">
        <SubmitWorkout />
      </Route>
      </div>
      <div>
      <Route exact path="/SavedWorkouts">
        <SavedWorkouts />
      </Route>
      <div className="calculator">
        <Route exact path="/Calculator">
          <Calculator />
        </Route>
      </div>
      <div className="footer">
        <Footer />    
      </div>  
      </div>
    </div>
  )
}

export default App;
