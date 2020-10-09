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
    props.setFetchLiftLogs(!props.fetchLiftLogs)
    setDay("")
    setExercise("")
    setWeight("")
    setReps("")
    setNotes("")
  }

  return (
    <div className="submit-workout">
    <form onSubmit={handleSubmit}>
      <label className="formLabel" htmlFor="Day">Day:</label>
      <input className="formInput"
        name="Day"
        type="text"
        placeholder="Day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <label className="formLabel" htmlFor="Exercise">Exercise:</label>
      <input className="formInput"
        name="Exercise"
        type="text"
        placeholder="Exercise Name"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />
      <label className="formLabel" htmlFor="Weight">Weight:</label>
      <input className="formInput"
        name="Weight"
        type="text"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <label className="formLabel" htmlFor="Reps">Reps:</label>
      <input className="formInput"
        name="Reps"
        type="text"
        placeholder="Reps"
        value={weight}
        onChange={(e) => setReps(e.target.value)}
      />
      <label className="formLabel" htmlFor="Notes">Notes:</label>
      <input className="formInput"
        name="Notes"
        type="text"
        placeholder="Notes"
        value={weight}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit" className="formSubmitButton">Submit Workout</button>
      </form>
      </div>
  )
}

export default SubmitWorkout