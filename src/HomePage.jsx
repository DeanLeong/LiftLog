import React from "react"

//The homepage is some information about the app and an inspirational quote from Arnold, of course.
function HomePage() {
  return (
    <div>
      <h2>Welcome to Liftlog!</h2>
      <div className="homepage-container">
        <div className="info-box">
          <p>Liftlog is designed to help keep track of your weightlifting workouts.</p>
          <p className="info-top">Here you can: </p>
        <div className="homepage-info">
          <p>Submit a workout.</p>
          <p>See your saved workouts.</p>
          <p>Use some weightlifting-related calculators.</p>
        </div>
        </div>
      </div>
      <div className="quote">
        <p>"The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent."</p>
        <p>- Arnold Schwarzenegger</p>
      </div>  
    </div>
  )
}

export default HomePage