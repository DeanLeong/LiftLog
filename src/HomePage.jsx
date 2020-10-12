import React from "react"

function HomePage() {
  return (
    <div>
      <h2>Welcome to Liftlog!</h2>
      <p>Liftlog is designed to help keep track of your weightlifting workouts.</p>
      <p className="info-top">Here you can: </p>
      <div className="homepage-info">
      <ol className="homepage-list">
        <li>Submit a workout.</li>
        <li>See your saved workouts.</li>
        <li>Use some weightlifting-related calculators.</li>
      </ol>
      </div>
    </div>
  )
}

export default HomePage