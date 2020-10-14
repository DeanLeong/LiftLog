import React, { useState, useEffect } from "react"
import axios from "axios"


//Search function made with help from https://www.jamesqquick.com/blog/build-a-javascript-search-bar
const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <input
      key="random1"
      value={keyword}
      placeholder={"Search"}
      onChange={(e) => setKeyword(e.target.value)} />
  )
}

export default SearchBar