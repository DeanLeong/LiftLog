import React, { useState, useEffect } from "react"
import axios from "axios"
import baseURL from "./constants"

function SavedWorkouts(props) { 
  const [workouts, setWorkouts] = useState([])
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    const getWorkouts = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/liftlog`
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      //console.log(response.data.records)
      setWorkouts(response.data.records)
    }
    getWorkouts()
  }, [])

  const handleDelete = async () => {
    setDeleted(true)
    setTimeout(async () => {
      const airtableURL = `${baseURL}/${props.liftlog.id}`
      await axios.delete(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      props.setFetchLifts((prevFetchLifts) => !prevFetchLifts)
      setDeleted(false)
    }, 2000)
  }

  //How to get this organized by most recently submitted?
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
            <button onClick={handleDelete}>{deleted ? "Deleted" : "Delete"}</button>
          </div>
        ))}
    </div>
  </div>
  )
  
}

export default SavedWorkouts
