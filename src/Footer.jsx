import React from "react"

//Link my socials/contact info
function Footer() {
  return (
    <div className="footer">
      <p className="footer-text">Dean Leong 2020</p>
      <button className="footer-button"><a href="https://github.com/DeanLeong" className="footer-button">Github</a></button>
      <button className="footer-button"><a href="https://www.linkedin.com/in/dean-leong-2a68041b2/" className="footer-button">LinkedIn</a></button>
      {/* <button className="footer-button"><a href="https://www.instagram.com/dean_leong/">Instagram</a></button> */}
    </div>
  )
}

export default Footer