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

  
  //How to get the calcs to run on click?
  //Made with help from https://www.w3schools.com/howto/howto_js_weight_converter.asp
  return (
    <div>
      <h2>Weight Calculators</h2>
      <div className="calculators">
      <div className="lbs-to-kgs">
        <form className="calculator-bg">
          <h3 className="calculator-bg">Pounds to Kilograms</h3>
        <label htmlFor="lbsToKgs" className="calculator-bg">Lbs:</label>
        <input className="calculator-input"
          name="Pounds"
          type="text"
          placeholder="Pounds"
          value={lbsValue}
          onChange={(e) => setLbsValue(e.target.value)}
        />
          {/* <button type="submit" className="lbs-to-kgs-submit">Calculate</button> */}
      </form>
        <p className="calculator-bg">Result: {lbsValue / 2.2046}</p>
      </div>
      <div className="kgs-to-lbs">
        <form className="calculator-bg">
        <h3 className="calculator-bg">Kilograms to Pounds</h3>
        <label htmlFor="kgsToLbs" className="calculator-bg">Kgs:</label>
        <input className="calculator-input"
          name="Kilograms"
          type="text"
          placeholder="Kilograms"
          value={kgsValue}
          onChange={(e) => setKgsValue(e.target.value)}
        />
          {/* <button type="submit" className="kgs-to-lbs-submit">Calculate</button> */}
        </form>
        <p className="calculator-bg">Result: {kgsValue * 2.2046}</p>
        </div>
        </div>
    </div>
  )
}

export default Calculators

//pr calculator?