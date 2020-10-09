import React, { useState, useEffect } from "react"
import axios from "axios"

function Workouts() { 

  useEffect(() => {
    const getWorkouts = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/liftlog`
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      console.log(response.data)
    }
    getWorkouts()
  }, [])

  return (
    <div>

    </div>
  )
  
}

export default Workouts
