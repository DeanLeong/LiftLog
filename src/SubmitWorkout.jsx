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
    <form onSubmit={handleSubmit}>
      <label htmlFor="Day">Day:</label>
      <input
        name="Day"
        type="text"
        placeholder="Day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <label htmlFor="Exercise">Exercise:</label>
      <input
        name="Exercise"
        type="text"
        placeholder="Exercise Name"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />
      <label htmlFor="Weight">Weight:</label>
      <input
        name="Weight"
        type="text"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <label htmlFor="Reps">Reps:</label>
      <input
        name="Reps"
        type="text"
        placeholder="Reps"
        value={weight}
        onChange={(e) => setReps(e.target.value)}
      />
      <label htmlFor="Notes">Notes:</label>
      <input
        name="Notes"
        type="text"
        placeholder="Notes"
        value={weight}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Submit Workout</button>
    </form>
  )
}

export default SubmitWorkout