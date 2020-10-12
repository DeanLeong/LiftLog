import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <h1>LiftLog</h1>
      <nav>
        <button className="nav-buttons">
          <Link to={`/HomePage`} className="nav-buttons">Home</Link>
        </button>
        <button className="nav-buttons">
          <Link to={`/SubmitWorkout`} className="nav-buttons">Submit Workout</Link>
        </button>
        <button className="nav-buttons">
          <Link to={`/SavedWorkouts`} className="nav-buttons">Saved Workouts</Link>
        </button>
        <button className="nav-buttons">
          <Link to={`/Calculator`} className="nav-buttons">Weight Calculators</Link>
        </button>
      </nav>
    </div>
  );
}

export default Header