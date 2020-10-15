import React, { useState, useEffect } from "react"
import axios from "axios"


//Search function made with help from https://medium.com/@pradityadhitama/simple-search-bar-component-functionality-in-react-6589fda3385d
const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = ({width:"20rem", background:"##f8f8ff", border:"none"})
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Search"}
      onChange={(e) => setKeyword(e.target.value)} />
  )
}

export default SearchBar