import React, { useState, useEffect } from "react"
import { Link, Route } from "react-router-dom"
import axios from "axios"

function SavedWorkouts(props) { 
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    const getWorkouts = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/liftlog`
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      console.log(response.data.records)
      setWorkouts(response.data.records)
    }
    getWorkouts()
  }, [])

  
  return (
    <div>
    <div>
        <h1>LiftLog</h1>
        <Route exact path="/">
          <h2>Saved Workouts</h2>
        </Route>
        <nav>
          Home |
          Saved workouts |
          lb to kg calculator |
        </nav>
    </div>
    <div className="savedWorkouts">
        {workouts.map((workout) => (
          <p>{workout.fields.Day},
            {workout.fields.Exercise},
            {workout.fields.Weight},
            {workout.fields.Reps},
            {workout.fields.Notes} </p>
 
        ))}
    </div>
  </div>
  )
  
}

export default SavedWorkouts
