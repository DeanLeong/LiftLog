import React, { useState, useEffect } from "react"
import axios from "axios"



//Saved workouts displays all data from the API and also contains the delete function to delete any notes. Data is displayed starting at the most recently submitted page.
function SavedWorkouts(props) { 
  const [workouts, setWorkouts] = useState([]);
  const [deleted, setDeleted] = useState(false)
  
  

  useEffect(() => {
    const getWorkouts = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/liftlog?sort%5B0%5D%5Bfield%5D=createdAt&sort%5B0%5D%5Bdirection%5D=desc`
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      setWorkouts(response.data.records)
    }
    getWorkouts()
  }, [deleted])

  const handleDelete = async (id) => {
    setDeleted(false)
    setTimeout(async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/liftlog/${id}`
      await axios.delete(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      setDeleted(true)
    }, 1)
  }

  return (
    <div>
      <h2>Saved Workouts</h2>
    <div className="saved-workouts">
        {workouts.map((workout) => (
          <div key={workout.id} className="saved-workout-container">
            <p className="saved-workout-text">Day: {workout.fields.day}</p>
            <p className="saved-workout-text">Exercise: {workout.fields.exercise}</p>
            <p className="saved-workout-text">Weight: {workout.fields.weight}</p>
            <p className="saved-workout-text">Reps: {workout.fields.reps}</p>
            <p className="saved-workout-text">Notes: {workout.fields.notes}</p>
            <button onClick={(() => handleDelete(workout.id))} className="delete-button">Delete</button>
          </div>
        ))}
    </div>
  </div>
  )
  
}

export default SavedWorkouts