import React, { useState, useEffect } from "react"
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

  //Why does this return out of order?
  return (
    <div>
      <h2>Saved Workouts</h2>
    <div className="saved-workouts">
        {workouts.map((workout) => (
          <div className="saved-workout-container">
            <p>Day: {workout.fields.day}</p>
            <p>Exercise: {workout.fields.exercise}</p>
            <p>Weight: {workout.fields.weight}</p>
            <p>Reps: {workout.fields.reps}</p>
            <p>Notes: {workout.fields.notes}</p>
          </div>
        ))}
    </div>
  </div>
  )
  
}

export default SavedWorkouts
