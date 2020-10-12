import React, { useState } from "react"
import axios from "axios"
//import baseURL from "./constants"


function SubmitWorkout(props) {
  const [day, setDay] = useState("")
  const [exercise, setExercise] = useState("")
  const [weight, setWeight] = useState("")
  const [reps, setReps] = useState("")
  const [notes, setNotes] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const fields = {
      day,
      exercise,
      weight,
      reps,
      notes,
    }
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/liftlog`

    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      }
    )
    //props.setFetchLiftlog(!props.fetchLiftLogs) I guess I don't need this
    setDay("")
    setExercise("")
    setWeight("")
    setReps("")
    setNotes("")
  }

  return (
    <div className="submit-page">
      <h2>Submit A Workout</h2>
    <div className="submit-workout">
    <form onSubmit={handleSubmit} className="submit-form">
      <label className="form-label" htmlFor="Day">Day:</label>
      <input className="form-input"
        name="Day"
        type="text"
        placeholder="Day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <label className="form-label" htmlFor="Exercise">Exercise:</label>
      <input className="form-input"
        name="Exercise"
        type="text"
        placeholder="Exercise Name"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />
      <label className="form-label" htmlFor="Weight">Weight:</label>
      <input className="form-input"
        name="Weight"
        type="text"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <label className="form-label" htmlFor="Reps">Reps:</label>
      <input className="form-input"
        name="Reps"
        type="text"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <label className="form-label" htmlFor="Notes">Notes:</label>
      <input className="form-input"
        name="Notes"
        type="text"
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit" className="form-submit-button">Submit Workout</button>
      </form>
      </div>
    </div>
  )
}

export default SubmitWorkout