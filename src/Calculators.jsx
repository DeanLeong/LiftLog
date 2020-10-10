import React, { useState } from "react"

function Calculators() {
  const [value, setValue] = useState("")

  function lbsToKgs() {
    let kgs = value / 2.2046
    console.log(kgs)
    return kgs
  }
  lbsToKgs()
  return (
    <div>
      <h2>Weight Calculators</h2>
      <form onSubmit={lbsToKgs}>
        <label htmlFor="lbsToKgs">Lbs:</label>
        <input className="lbsInput"
          name="Pounds"
          type="text"
          placeholder="Pounds"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="lbs-to-kgs-submit">Calculate</button>
      </form>
      {/* <p>{kgs}</p> */}
    </div>
  )
}

export default Calculators

//I have a functional pounds input
//I need to take that input and plug it into a mathematical operation