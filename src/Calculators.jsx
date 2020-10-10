import React, { useState } from "react"

function Calculators() {
  const [lbsValue, setLbsValue] = useState("")
  const [kgsValue, setKgsValue] = useState("")

  // function lbsToKgs() {
  //   let kgs = value / 2.2046
  //   console.log(kgs)
  //   return kgs
  // }
  // lbsToKgs()

  return (
    <div>
      <h2>Weight Calculators</h2>
      <div className="lbs-to-kgs">
        <form>
          <h3>Pounds to Kilograms</h3>
        <label htmlFor="lbsToKgs">Lbs:</label>
        <input className="lbs-input"
          name="Pounds"
          type="text"
          placeholder="Pounds"
          value={lbsValue}
          onChange={(e) => setLbsValue(e.target.value)}
        />
          <button type="submit" className="lbs-to-kgs-submit">Calculate</button>
      </form>
        <p>Result: {lbsValue / 2.2046}</p>
      </div>
      <div className="kgs-to-lbs">
        <form>
        <h3>Kilograms to Pounds</h3>
        <label htmlFor="kgsToLbs">Kgs:</label>
        <input className="kgsInput"
          name="Kilograms"
          type="text"
          placeholder="Kilograms"
          value={kgsValue}
          onChange={(e) => setKgsValue(e.target.value)}
        />
          <button type="submit" className="kgs-to-lbs-submit">Calculate</button>
        </form>
        <p>Result: {kgsValue * 2.2046}</p>
        </div>
    </div>
  )
}

export default Calculators

//I have a functional pounds input
//I need to take that input and plug it into a mathematical operation