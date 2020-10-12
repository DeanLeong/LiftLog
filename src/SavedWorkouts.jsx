import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";



function SavedWorkouts(props) { 
  const [workouts, setWorkouts] = useState([]);
  const [deleted, setDeleted] = useState(false)
  //const params = useParams()
  
  

  useEffect(() => {
    const getWorkouts = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/liftlog?sort%5B0%5D%5Bfield%5D=createdAt&sort%5B0%5D%5Bdirection%5D=desc`
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      //console.log(response.data.records)
      setWorkouts(response.data.records)
    }
    getWorkouts()
  }, [deleted])
  //console.log(workouts)

  //how to get this delete button to work? Like 28 is like line 7 from showpage birds - doesn't work but also doesn't break code
  const handleDelete = async (id) => {
    setDeleted(false)
    setTimeout(async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/liftlog/${id}`
      await axios.delete(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      //setGetWorkouts((prevGetWorkouts) => !prevGetWorkouts) //something is up here
      setDeleted(true)
    }, 1)
  }

  //How to get this organized by most recently submitted?
  //onclick needs to be an anon callback function argument needs to be passed an argument
  //function within the button itself - each individual bttn needs to contain the info of what needs to be deleted
  //delete works need the page to render correctly now (need to refresh page as of right now)
  return (
    <div>
      <h2>Saved Workouts</h2>
    <div className="saved-workouts">
        {workouts.map((workout) => (
          <div key={workout.id} className="saved-workout-container">
            <p>Day: {workout.fields.day}</p>
            <p>Exercise: {workout.fields.exercise}</p>
            <p>Weight: {workout.fields.weight}</p>
            <p>Reps: {workout.fields.reps}</p>
            <p>Notes: {workout.fields.notes}</p>
            <button onClick={(() => handleDelete(workout.id))} className="delete-button">Delete</button>
          </div>
        ))}
    </div>
  </div>
  )
  
}

export default SavedWorkouts


  //second try at a delete function
  // function handleDelete() {
  //   const [deleted, setDeleted] = useState(false)

  //   setDeleted(true)
  //   setTimeout(async () => {
  //     const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/liftlog/${workouts.fields.id}`
  //     await axios.delete(airtableURL, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  //       }
  //     })
  //     setDeleted(false)
  //   }, 1000)
  // }

  //.find((r) => r.id === workouts.id)