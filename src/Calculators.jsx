import React, { useState } from "react"

function Calculators() {
  const [value, setValue] = useState("")
  function lbsToKgs() {
    
  }
  return (
    <div>
      <h2>Weight Calculators</h2>
      <form>
        <label htmlFor="lbsToKgs">Lbs:</label>
        <input className="lbsInput"
          name="Pounds"
          type="text"
          placeholder="Pounds"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
      </form>
    </div>
  )
}

export default Calculators