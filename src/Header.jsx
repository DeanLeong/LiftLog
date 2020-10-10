import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <h1>LiftLog</h1>
      <nav>
        <button>
          <Link to={`/SubmitWorkout`}>Submit Workout</Link>
        </button>
        <button>
          <Link to={`/SavedWorkouts`}>Saved Workouts</Link>
        </button>
        <button>
          <Link to={`/Calculator`}>Weight Calculators</Link>
        </button>
      </nav>
    </div>
  );
}

export default Header