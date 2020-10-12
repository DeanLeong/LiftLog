import React from "react"

function HomePage() {
  return (
    <div>
      <h2>Welcome to Liftlog!</h2>
      <p>Liftlog is designed to help keep track of your weightlifting workouts.</p>
      <p className="info-top">Here you can: </p>
      <div className="homepage-info">
        <p>Submit a workout.</p>
        <p>See your saved workouts.</p>
        <p>Use some weightlifting-related calculators.</p>
      </div>
      <div className="feds-embed">
        <embed src="https://www.usapowerlifting.com/"></embed>
        <embed src="https://meets.revolutionpowerlifting.com/"></embed>
      </div>
    </div>
  )
}

export default HomePage