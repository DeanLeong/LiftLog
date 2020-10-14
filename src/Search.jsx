import React, { useState, useEffect } from "react"
import axios from "axios"
import SavedWorkouts from "./SavedWorkouts"


//Search function made with help from https://www.jamesqquick.com/blog/build-a-javascript-search-bar
function Search() {
  const searchString = e.target.value.toLowerCase()
  
  const Search = workouts.filter((day) => {
    return (
      workouts.fields.day.toLowerCase().includes(searchString)
    )
  })
    

  return (
    <div className="search">
      <input type="text" name="search" className="search-input" placeholder="Search Workouts by Day"></input>
    </div>
  )
}

export default Search